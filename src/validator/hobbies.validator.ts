
import validate from 'validator';
import { passionLevel } from "./utils.validator";

export const hobbiesValidator = (hobbies: { passionLevel: string, name: string, year: number }) => {

    const error: any = {};

    if (!hobbies.name) {
        error.name = "Please provide hobby 'name' key";
    }
    if (hobbies.passionLevel && !passionLevel.includes(hobbies.passionLevel) ) {
        error.passionLevel = `Passion can be selected out of ${ passionLevel }`;
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }

}
