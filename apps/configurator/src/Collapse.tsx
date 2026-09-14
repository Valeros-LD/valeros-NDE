import type { RJSFSchema } from '@rjsf/utils';
import type { ReactNode } from 'react';

export function getFieldTitle(
  schema: RJSFSchema,
  name: string,
  fallback: string,
) {
  const fieldSchema = schema.properties?.[name];
  return typeof fieldSchema === 'object' && fieldSchema.title
    ? fieldSchema.title
    : fallback;
}

export function Collapse({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="collapse collapse-arrow border border-base-300 mt-2">
      <input type="checkbox" />
      <div className="collapse-title text-sm font-medium">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
