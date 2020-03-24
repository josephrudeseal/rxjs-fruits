// tslint:disable: no-shadowed-variable deprecation
import { ConfettiService } from './confetti.service';
import { LevelService, Level } from './level.service';
import { ExerciseService } from './shared/exercise.service';
import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { from as fromX } from 'rxjs';
import { delay, tap, concatMap, take, filter } from 'rxjs/operators';
import { distinct as distinctX, map as mapX, take as takeX, filter as filterX } from 'rxjs/operators';
import { TimelineLite, Power0, Bounce } from 'gsap';
import { MonacoEditorComponent, MonacoEditorLoaderService } from '@materia-ui/ngx-monaco-editor';
import * as monaco from 'monaco-editor';
import { Router } from '@angular/router';
import { Exercise } from './shared/exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
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

  isLevelsWrapperOpen = false;
  clickedByToggle = false;
  fruits: Fruit[] = [];
  fruitsInPipe: string[] = [];
  code = '';
  isNextExerciseAviable = false;
  isToMuchFruits = false;
  currentExercise: Exercise = {
    code: '',
    codeLineLength: 0,
    expectedFruits: [],
    fruits: [],
    maxPositionLineNumber: 0,
    minPositionLineNumber: 0,
    positionColumnNumber: 0,
    recipeDescription: ''
  };

  constructor(
    public levelService: LevelService,
    private router: Router,
    private exerciseService: ExerciseService,
    confettiService: ConfettiService,
    monacoLoader: MonacoEditorLoaderService,
    httpClient: HttpClient
  ) {
    exerciseService.exerciseChanged$.pipe(delay(0)).subscribe({
      next: exercise => {
        this.currentExercise = exercise;
        this.code = exercise.code;
        this.changeMonacoSettings();
      }
    });

    exerciseService.assertionChecked$.subscribe({
      next: valid => this.isNextExerciseAviable = valid
    });

    monacoLoader.isMonacoLoaded$
      .pipe(
        filter(isLoaded => isLoaded === true),
        take(1)
      )
      .subscribe({
        next: () => {
          httpClient
            .get('assets/rx6.d.ts', { responseType: 'text' })
            .subscribe({
              next: data => {
                (window as any).monaco.languages.typescript.typescriptDefaults.addExtraLib(
                  data,
                  ''
                );
              }
            });

          this.setupMonacoSettings();
          this.changeMonacoSettings();
        }
      });

    levelService.gameOver$.subscribe({
      next: () => confettiService.start()
    });
  }

  previousLevelStyle() {
    return {
      disabled: this.levelService.currentLevelIndex === 0
    };
  }

  nextLevelStyle() {
    return {
      disabled:
        this.levelService.levels.length ===
        this.levelService.currentLevel.number
    };
  }

  levelStateStyle(level: Level) {
    return {
      current: this.levelService.isCurrentLevel(level),
      solved: level.solved
    };
  }

  buttonAnimationStyle() {
    return {
      animated: this.isNextExerciseAviable,
      nextButtonAnimation: this.isNextExerciseAviable
    };
  }

  recipeAnimationStyle() {
    let assertionFailed = false;

    for (let index = 0; index < this.fruitsInPipe.length; index++) {
      const fruit = this.fruitsInPipe[index];
      assertionFailed = this.currentExercise.expectedFruits[index] !== fruit;
    }

    return {
      animated: assertionFailed,
      shake: assertionFailed
    };
  }

  toggleLevelsWrapper() {
    this.clickedByToggle = !this.clickedByToggle;
    this.isLevelsWrapperOpen = !this.isLevelsWrapperOpen;
  }

  closeLevelsWrapper() {
    if (this.isLevelsWrapperOpen && !this.clickedByToggle) {
      this.isLevelsWrapperOpen = false;
    } else {
      this.clickedByToggle = false;
    }
  }

  assertFruitPipeIcon(index: number) {
    if (
      this.fruitsInPipe.length === 0 ||
      typeof this.fruitsInPipe[index] === 'undefined'
    ) {
      return '';
    }

    if (
      this.currentExercise.expectedFruits[index] === this.fruitsInPipe[index]
    ) {
      return '✔';
    }

    return '❌';
  }

  setupMonacoSettings() {
    setTimeout(() => {
      this.editor.editor.onDidChangeCursorPosition(e => {
        const minPositionLineNumber = this.currentExercise
          .minPositionLineNumber;
        const maxPositionLineNumber = this.currentExercise
          .maxPositionLineNumber;
        const positionColumnNumber = this.currentExercise.positionColumnNumber;

        if (
          e.position.lineNumber < minPositionLineNumber ||
          e.position.lineNumber > maxPositionLineNumber
        ) {
          this.editor.editor.setPosition({
            lineNumber: minPositionLineNumber,
            column: positionColumnNumber
          });
        }
      });

      this.editor.editor.onDidChangeModelContent(e => {
        const minPositionLineNumber = this.currentExercise
          .minPositionLineNumber;
        const maxPositionLineNumber = this.currentExercise
          .maxPositionLineNumber;
        const codeLineLength = this.currentExercise.codeLineLength;

        this.editor.editor.deltaDecorations(
          [],
          [
            {
              range: new monaco.Range(1, 1, minPositionLineNumber - 1, 24),
              options: { inlineClassName: 'myInlineDecoration' }
            },
            {
              range: new monaco.Range(
                maxPositionLineNumber + 1,
                1,
                codeLineLength,
                24
              ),
              options: { inlineClassName: 'myInlineDecoration' }
            }
          ]
        );

        const lineCount = this.editor.editor.getModel().getLineCount();
        if (lineCount !== codeLineLength) {
          this.editor.editor.trigger('', 'undo', '');
        }
      });
    }, 0);
  }

  changeMonacoSettings() {
    setTimeout(() => {
      const minPositionLineNumber = this.currentExercise.minPositionLineNumber;
      const maxPositionLineNumber = this.currentExercise.maxPositionLineNumber;
      const positionColumnNumber = this.currentExercise.positionColumnNumber;
      const codeLineLength = this.currentExercise.codeLineLength;

      this.editor.editor?.setPosition({
        lineNumber: minPositionLineNumber,
        column: positionColumnNumber
      });

      this.editor.editor?.deltaDecorations([],
        [
          {
            range: new monaco.Range(1, 1, minPositionLineNumber - 1, 24),
            options: { inlineClassName: 'myInlineDecoration' }
          },
          {
            range: new monaco.Range(
              maxPositionLineNumber + 1,
              1,
              codeLineLength,
              24
            ),
            options: { inlineClassName: 'myInlineDecoration' }
          }
        ]
      );

      this.editor.editor?.focus();
    }, 0);
  }

  run() {
    this.fruits = [];
    this.fruitsInPipe = [];
    this.isToMuchFruits = false;

    const from = fromX;
    const distinct = distinctX;
    const map = mapX;
    const take = takeX;
    const filter = filterX;

    const userPipe: Observable<string> = eval(this.code);
    userPipe
      .pipe(
        concatMap(item => of(item).pipe(delay(1000))),
        tap(x => console.log(x)),
        tap(fruit => {
          this.fruitsInPipe.push(fruit);

          if (
            this.fruitsInPipe.length >
            this.currentExercise.expectedFruits.length
          ) {
            this.isToMuchFruits = true;
          }
        }),
        tap((fruit: string) => this.addFruitToView(fruit))
      )
      .subscribe(this.exerciseService.assertExerciseOutput());
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
    timeline
      .to(fruitSelector, 3, { x: '15vw', ease: Power0.easeNone })
      .to(fruitSelector, 2, { y: '40vw', ease: Bounce.easeOut })
      .to(fruitSelector, 1, { x: 0, y: 0, visibility: 'hidden' });
  }

  startConveyorBeltAnimation() {
    const wheels = this.conveyorBelt.nativeElement.contentDocument.querySelectorAll(
      '[id^=wheel]'
    );

    const timeline = new TimelineLite();
    timeline.to(
      wheels,
      3,
      {
        rotation: 360,
        transformOrigin: 'center',
        ease: Power0.easeNone,
        repeat: -1
      },
      0
    );
  }

  nextExercise(currentLevelSolved: boolean) {
    this.resetCurrentState();
    this.levelService.nextLevel(currentLevelSolved);
    this.router.navigate([this.levelService.currentLevel.urlPath]);

    this.isNextExerciseAviable = false;
  }

  previousExercise() {
    this.levelService.previousLevel();
    this.router.navigate([this.levelService.currentLevel.urlPath]);

    this.isNextExerciseAviable = false;
  }

  goToExercise(level: Level) {
    this.resetCurrentState();
    this.levelService.currentLevel = level;
    this.router.navigate([level.urlPath]);
  }

  resetCurrentState() {
    this.fruitsInPipe = [];
    this.isToMuchFruits = false;
  }
}

export interface Fruit {
  id: string;
  url: string;
}
