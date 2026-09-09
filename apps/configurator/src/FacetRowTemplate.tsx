import type { ObjectFieldTemplateProps } from '@rjsf/utils';
import type { FacetConfig } from '@valeros/config-schema';
import { clsx } from 'clsx';
import { ConfigRowTitle } from './ConfigRowTitle';

const facetFieldOrder = ['name', 'label', 'icon', 'hidden'] as ReadonlyArray<
  keyof FacetConfig
>;

export function FacetRowTemplate({
  properties,
  formData: facetConfig,
}: ObjectFieldTemplateProps<FacetConfig>) {
  const hidden = Boolean(facetConfig?.hidden);

  return (
    <div className={clsx(hidden && 'opacity-40')}>
      <ConfigRowTitle icon={facetConfig?.icon} label={facetConfig?.label} />
      <div className="flex items-center gap-3">
        {facetFieldOrder.map((name) => {
          const prop = properties.find((p) => p.name === name);
          return prop ? (
            <div key={name} className="flex-1">
              {prop.content}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
