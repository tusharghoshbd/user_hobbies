
import validate from 'validator';

export const userValidator = (user: { name: string }) => {

    const error: any = {};

    if (!user.name) {
        error.name = "Please provide user 'name' key";
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }

}
