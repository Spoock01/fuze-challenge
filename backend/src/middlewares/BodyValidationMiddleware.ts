import { RequestHandler } from 'express';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { sanitize } from 'class-sanitizer';
import ValidationsErrors from '../errors/ValidationsError';

// eslint-disable-next-line max-len
export default function bodyValidationMiddleware(type: any, skipMissingProperties = false): RequestHandler {
  return (req, res, next) => {
    const dtoObj = plainToClass(type, req.body);
    validate(dtoObj, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const dtoErrors = errors.map((error: ValidationError) => ({
            field: error.property,
            errors: (Object as any).values(error.constraints),
          }));
          next(new ValidationsErrors(dtoErrors, 400));
        } else {
          sanitize(dtoObj);
          req.body = dtoObj;
          next();
        }
      },
    );
  };
}
