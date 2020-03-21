import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { distinct as distinctX, map as mapX, delay, tap, concatMap, take, filter } from 'rxjs/operators';
import { TimelineLite, Power0, Bounce } from 'gsap';
import { MonacoEditorComponent, MonacoEditorLoaderService } from '@materia-ui/ngx-monaco-editor';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MonacoEditorComponent, { static: false })
  editor: MonacoEditorComponent;
  editorOptions = {
    theme: 'vs-dark',
    language: 'typescript',
    fontSize: 16,
    minimap: {
      enabled: false
    },
    fixedOverflowWidgets: true
  };

  @ViewChild('conveyorbelt', { static: true })
  conveyorBelt: ElementRef<HTMLObjectElement>;

  fruits: Fruit[] = [];
  code = `const fruits = from([
    "fresh-apple", 
    "fresh-apple", 
    "fresh-banana", 
    "fresh-apple"]);
fruits.pipe(
\t\t
);`;
  task = '';

  constructor(monacoLoader: MonacoEditorLoaderService,
              httpClient: HttpClient) {
    monacoLoader.isMonacoLoaded$
      .pipe(filter(isLoaded => isLoaded === true), take(1))
      .subscribe({
        next: () => {
          httpClient.get('assets/rx6.d.ts', { responseType: 'text' }).subscribe({
            next: (data) => {
              ((window as any).monaco).languages.typescript.typescriptDefaults.addExtraLib(data, '');
            }
          });

          setTimeout(() => {
            this.editor.editor.onDidChangeCursorPosition((e) => {
              if (e.position.lineNumber < 7 || e.position.lineNumber > 7) {
                this.editor.editor.setPosition({
                  lineNumber: 7,
                  column: 2
                });
              }
            });

            this.editor.editor.setPosition({
              lineNumber: 7,
              column: 2
            });

            this.editor.editor.deltaDecorations([], [
              { range: new monaco.Range(1, 1, 6, 24), options: { inlineClassName: 'myInlineDecoration' } },
              { range: new monaco.Range(8, 1, 8, 24), options: { inlineClassName: 'myInlineDecoration' } },
            ]);

            this.editor.editor.onDidChangeModelContent((e) => {
              const lineCount = this.editor.editor.getModel().getLineCount();
              if (lineCount < 8) {
                this.editor.editor.trigger('', 'undo', '');
              }
            });

            this.editor.editor.focus();
          }, 0);
        }
      });
  }

  run() {
    this.fruits = [];
    const distinct = distinctX;
    const map = mapX;

    const fruits = of('fresh-apple', 'fresh-apple', 'fresh-banana', 'fresh-apple');
    const userPipe: Observable<string> = eval(`fruits.pipe(
      ${this.code.split('\n')[6]}
    );`);

    userPipe.pipe(
      concatMap(item => of(item).pipe(delay(1000))),
      tap(x => console.log(x)),
      tap((fruit: string) => this.addFruitToView(fruit))
    ).subscribe();
  }

  addFruitToView(fruit: string): void {
    let fruitSelector = '';

    switch (fruit) {
      case 'fresh-apple':
        fruitSelector = 'fruit-apple-' + this.fruits.length;
        this.fruits.push({ id: fruitSelector, url: 'assets/Fruit-Apple.png' });
        break;

      case 'fresh-banana':
        fruitSelector = 'fruit-banana-' + this.fruits.length;
        this.fruits.push({ id: fruitSelector, url: 'assets/Fruit-Banana.png' });
        break;

      default:
        break;
    }
  }

  startFruitAnimation(fruitSelector) {
    fruitSelector = '#' + fruitSelector;

    // const width = this.conveyorBelt.nativeElement.contentDocument.querySelectorAll('#conveyor-belt')[0].getBBox().width;
    const width = this.conveyorBelt.nativeElement.offsetWidth;

    const timeline = new TimelineLite();
    timeline.to(fruitSelector, 3, { x: '15vw', ease: Power0.easeNone })
      .to(fruitSelector, 2, { y: '40vw', ease: Bounce.easeOut })
      .to(fruitSelector, 1, { x: 0, y: 0, visibility: 'hidden' });
  }

  startConveyorBeltAnimation() {
    const wheels = this.conveyorBelt.nativeElement.contentDocument.querySelectorAll('[id^=wheel]');

    const timeline = new TimelineLite();
    timeline.to(wheels, 3, {
      rotation: 360,
      transformOrigin: 'center',
      ease: Power0.easeNone,
      repeat: -1
    }, 0);
  }
}

export interface Fruit {
  id: string;
  url: string;
}
