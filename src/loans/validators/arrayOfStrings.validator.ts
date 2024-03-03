import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export const IsArrayOfStrings =
  (validationOptions?: ValidationOptions) =>
  (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'isArrayOfStrings',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!Array.isArray(value)) {
            return false;
          }
          return value.every((item) => typeof item === 'string');
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be an array of strings`;
        },
      },
    });
  };
