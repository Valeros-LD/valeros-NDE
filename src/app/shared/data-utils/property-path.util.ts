import { normalizeToArray } from './value-normalization.util';

export function getNestedValue(value: unknown, path: string): unknown {
  return path.split('.').reduce((current: unknown, propertyKey: string) => {
    if (current === undefined || current === null) return undefined;

    const isObject = typeof current === 'object' && !Array.isArray(current);
    const hasProperty = isObject && propertyKey in current;

    if (hasProperty) {
      const propertyValue = (current as Record<string, unknown>)[propertyKey];
      return propertyValue;
    }

    if (Array.isArray(current)) {
      for (const arrayItem of current) {
        const itemIsObject = arrayItem && typeof arrayItem === 'object';
        const itemHasProperty = itemIsObject && propertyKey in arrayItem;

        if (itemHasProperty) {
          const propertyValue = (arrayItem as Record<string, unknown>)[
            propertyKey
          ];
          const isTruthy =
            propertyValue !== undefined &&
            propertyValue !== null &&
            propertyValue !== '';

          if (isTruthy) {
            return propertyValue;
          }
        }
      }
      return undefined;
    }

    return undefined;
  }, value);
}

export function applyPropertyPath(values: unknown[], path: string): unknown[] {
  return values
    .map((v) => getNestedValue(v, path))
    .filter((v) => v !== null && v !== undefined)
    .flatMap((v) => normalizeToArray(v));
}
