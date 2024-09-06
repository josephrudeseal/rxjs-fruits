import { OperatorInfo } from './operator-info.interface';

export interface Exercise {
    fruits: string[];
    expectedFruits: string[];
    code: string;
    minPositionLineNumber: number;
    positionColumnNumber: number;
}
