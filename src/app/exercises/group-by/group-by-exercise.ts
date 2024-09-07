import { Exercise } from "../../shared/exercise";

export class GroupByExercise implements Exercise {
  fruits = ['apple', 'old-apple', 'dirty-apple', 'banana', 'old-banana', 'dirty-banana'];
  expectedFruits = ['apple', 'banana'];
  // readonly fruits = ['apple'];
  //   readonly expectedFruits = ['apple', 'apple', 'apple'];
  // fruits: [
  //   { type: "apple"; name: "dirty-apple" },
  //   { type: "apple"; name: "apple" },
  //   { type: "banana"; name: "banana" },
  //   { type: "banana"; name: "old-banana" },
  //   { type: "banana"; name: "dirty-banana" },
  //   { type: "apple"; name: "old-apple" },
  //   { type: "banana"; name: "old-banana" }
  // ];
  // // Expected output to test against
  // expectedFruits: [
  //   { type: "apple"; name: "dirty-apple" },
  //   { type: "apple"; name: "apple" },
  //   { type: "apple"; name: "old-apple" },
  //   { type: "banana"; name: "banana" },
  //   { type: "banana"; name: "old-banana" },
  //   { type: "banana"; name: "dirty-banana" },
  //   { type: "banana"; name: "old-banana" }
  // ];
  // Apply RxJS operators to group fruits by type and process each group
  code = `const fruits = from([
  'apple',
  'old-apple',
  'dirty-apple',
  'banana',
  'old-banana',
  'dirty-banana'
  ]);

fruits.pipe(
  \t
).subscribe(fruit => toConveyorBelt(fruit));`;
  readonly minPositionLineNumber = 10;
  readonly positionColumnNumber = 3;
}
