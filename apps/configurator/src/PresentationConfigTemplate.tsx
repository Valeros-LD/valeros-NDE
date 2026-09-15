import type { ObjectFieldTemplateProps } from '@rjsf/utils';
import type { Widget } from '@valeros/config-schema';

import { Collapse, getFieldTitle } from './Collapse';

export function WidgetTemplate({
  properties,
  formData: widget,
  schema,
}: ObjectFieldTemplateProps<Widget>) {
  const options = properties.find((p) => p.name === 'options');
  const widgetProperties = properties.find((p) => p.name === 'properties');
  const rest = properties.filter(
    (p) => p.name !== 'options' && p.name !== 'properties',
  );

  return (
    <Collapse title={widget?.id ?? getFieldTitle(schema, 'id', 'Widget')}>
      {rest.map((p) => (
        <div key={p.name}>{p.content}</div>
      ))}
      {widgetProperties && (
        <Collapse title={getFieldTitle(schema, 'properties', 'Properties')}>
          {widgetProperties.content}
        </Collapse>
      )}
      {options && (
        <Collapse title={getFieldTitle(schema, 'options', 'Options')}>
          {options.content}
        </Collapse>
      )}
    </Collapse>
  );
}

export function PresentationConfigTemplate({
  properties,
  schema,
}: ObjectFieldTemplateProps) {
  const widgets = properties.find((p) => p.name === 'widgets');
  const rest = properties.filter((p) => p.name !== 'widgets');

  return (
    <div>
      {rest.map((p) => (
        <div key={p.name}>{p.content}</div>
      ))}
      {widgets && (
        <Collapse title={getFieldTitle(schema, 'widgets', 'Widgets')}>
          {widgets.content}
        </Collapse>
      )}
    </div>
  );
}
