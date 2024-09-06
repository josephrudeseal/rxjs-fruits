import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupByExercise } from './group-by-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.scss']
})
export class GroupByComponent implements OnInit, OnDestroy {
  exerciseTitle = 'group-by';
  groupByCode = `
  of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
    distinct()
  ).subscribe(x => console.log(x)); 

  // Logs:
  // 1
  // 2
  // 3
  // 4
  `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new GroupByExercise());
    this.currentLanguage = this.translateService.currentLang;
    this.onLangChangeSubscription = this.translateService.onLangChange.subscribe({
      next: () => {
        this.currentLanguage = this.translateService.currentLang;
      }
    });
  }

  ngOnDestroy() {
    this.onLangChangeSubscription.unsubscribe();
  }
}
