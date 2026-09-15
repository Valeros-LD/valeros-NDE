import {
  ArrayFieldItemTemplateProps,
  getTemplate,
  getUiOptions,
  type ObjectFieldTemplateProps,
} from '@rjsf/utils';
import type { ViewDefinition } from '@valeros/config-schema';
import { clsx } from 'clsx';
import { Collapse, getFieldTitle } from './Collapse';
import { ConfigRowTitle } from './ConfigRowTitle';
import { HelpMedia } from './help/HelpMedia';
import { isFieldHelp } from './help/types';

const viewRowFields = ['type', 'componentId', 'icon', 'label'] as ReadonlyArray<
  keyof ViewDefinition
>;

export function ViewArrayItemTemplate({
  buttonsProps,
  children,
  displayLabel,
  hasToolbar,
  registry,
  uiSchema,
}: ArrayFieldItemTemplateProps) {
  const ArrayFieldItemButtonsTemplate = getTemplate(
    'ArrayFieldItemButtonsTemplate',
    registry,
    getUiOptions(uiSchema),
  );

  return (
    <fieldset className="fieldset mb-4 flex rounded-lg border border-base-300 bg-base-100 p-4">
      {children}
      {hasToolbar && (
        <div className={`flex justify-end ${displayLabel ? 'mt-5' : 'mt-1'}`}>
          <ArrayFieldItemButtonsTemplate {...buttonsProps} />
        </div>
      )}
    </fieldset>
  );
}

export function ViewRowTemplate({
  properties,
  formData: view,
  schema,
  uiSchema,
}: ObjectFieldTemplateProps<ViewDefinition>) {
  const hidden = Boolean(view?.options?.hidden);
  const help = getUiOptions(uiSchema).helpMedia;

  const prop = (name: string) => properties.find((p) => p.name === name);
  const options = prop('options');
  const presentationConfig = prop('presentationConfig');

  return (
    <div className={clsx(hidden && 'opacity-40')}>
      <ConfigRowTitle icon={view?.icon} label={view?.label} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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

      {isFieldHelp(help) && (
        <div className="mt-1">
          <HelpMedia help={help} />
        </div>
      )}

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
