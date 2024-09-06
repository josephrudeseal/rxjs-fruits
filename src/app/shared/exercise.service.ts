import { HttpClient } from '@angular/common/http';
import { Exercise } from './exercise';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Operator, OperatorInfo } from './operator-info.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  currentExercise: Exercise = {
    code: '',
    fruits: [],
    expectedFruits: [],
    minPositionLineNumber: 0,
    positionColumnNumber: 0,
  };

  constructor(private http: HttpClient) {
    // this.operatorInfo.next(this.http.get<Operator[]>('assets/operator-info.json').pipe(map((info) => info.)));
    this.http.get<Observable<Operator[]>>('assets/operator-info.json').pipe(
      tap((info) => console.log(info)),
    );
  }

  private operatorInfo = new Subject<Operator[]>();

  assertionChecked$ = new Subject<boolean>();
  exerciseChanged$ = new Subject<Exercise>();

  newExercise(exercise: Exercise) {
    this.currentExercise = exercise;
    this.exerciseChanged$.next(exercise);
  }

  assertExerciseOutput(): PartialObserver<string> {
    const deliveredFruits: string[] = [];

    return {
      next: (deliveredFruit) => deliveredFruits.push(deliveredFruit),
      complete: () => {
        const valid = this.canAcceptDeliveredFruits(deliveredFruits);
        this.assertionChecked$.next(valid);
      }
    };
  }

  private canAcceptDeliveredFruits(deliveredFruits: string[]) {
    const expectedFruits = this.currentExercise.expectedFruits;
    if (deliveredFruits.length !== expectedFruits.length) {
      return false;
    }

    if (deliveredFruits.some((deliveredFruit, index) => deliveredFruit !== expectedFruits[index])) {
      return false;
    }

    return true;
  }
}
