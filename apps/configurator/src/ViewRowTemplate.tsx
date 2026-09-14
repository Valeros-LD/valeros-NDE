import type { ObjectFieldTemplateProps } from '@rjsf/utils';
import type { ViewDefinition } from '@valeros/config-schema';
import { clsx } from 'clsx';
import { Collapse, getFieldTitle } from './Collapse';
import { ConfigRowTitle } from './ConfigRowTitle';

const viewRowFields = ['type', 'componentId', 'icon', 'label'] as ReadonlyArray<
  keyof ViewDefinition
>;

export function ViewRowTemplate({
  properties,
  formData: view,
  schema,
}: ObjectFieldTemplateProps<ViewDefinition>) {
  const hidden = Boolean(view?.options?.hidden);

  const prop = (name: string) => properties.find((p) => p.name === name);
  const options = prop('options');
  const presentationConfig = prop('presentationConfig');

  return (
    <div className={clsx(hidden && 'opacity-40')}>
      <ConfigRowTitle icon={view?.icon} label={view?.label} />
      <div className="flex items-center gap-3">
        {viewRowFields.map((name) => {
          const p = prop(name);
          return (
            p && (
              <div key={name} className="flex-1">
                {p.content}
              </div>
            )
          );
        })}
      </div>
      {options && (
        <Collapse title={getFieldTitle(schema, 'options', 'Options')}>
          {options.content}
        </Collapse>
      )}
      {presentationConfig && (
        <Collapse
          title={getFieldTitle(schema, 'presentationConfig', 'Presentation')}
        >
          {presentationConfig.content}
        </Collapse>
      )}
    </div>
  );
}
