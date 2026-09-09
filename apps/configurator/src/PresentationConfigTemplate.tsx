import type { ObjectFieldTemplateProps } from '@rjsf/utils';
import type { NodePresentationConfig, Widget } from '@valeros/config-schema';

import { Collapse } from './Collapse';

export function WidgetTemplate({
  properties,
}: ObjectFieldTemplateProps<Widget>) {
  const options = properties.find((p) => p.name === 'options');
  const widgetProperties = properties.find((p) => p.name === 'properties');
  const rest = properties.filter(
    (p) => p.name !== 'options' && p.name !== 'properties',
  );

  return (
    <div>
      {rest.map((p) => (
        <div key={p.name}>{p.content}</div>
      ))}
      {widgetProperties && (
        <Collapse title="Properties">{widgetProperties.content}</Collapse>
      )}
      {options && <Collapse title="Opties">{options.content}</Collapse>}
    </div>
  );
}

export function PresentationConfigTemplate({
  properties,
}: ObjectFieldTemplateProps<NodePresentationConfig>) {
  const widgets = properties.find((p) => p.name === 'widgets');
  const rest = properties.filter((p) => p.name !== 'widgets');

  return (
    <div>
      {widgets && <Collapse title="Widgets">{widgets.content}</Collapse>}
      {rest.map((p) => (
        <div key={p.name}>{p.content}</div>
      ))}
    </div>
  );
}
