import type { ObjectFieldTemplateProps } from '@rjsf/utils';
import { useState } from 'react';

export function TabbedObjectFieldTemplate({
  properties,
  schema,
}: ObjectFieldTemplateProps) {
  const [activeTab, setActiveTab] = useState(properties[0]?.name ?? '');
  const activeProperty =
    properties.find(({ name }) => name === activeTab) ?? properties[0];

  return (
    <div>
      <div
        aria-label="Configuration sections"
        className="tabs tabs-box tabs-vertical mb-6 w-full sm:tabs-horizontal sm:flex-nowrap sm:overflow-x-auto"
        role="tablist"
      >
        {properties.map(({ name }) => {
          const propertySchema = schema.properties?.[name];
          const title =
            typeof propertySchema === 'object' && propertySchema.title
              ? propertySchema.title
              : name;
          const isActive = name === activeProperty?.name;

          return (
            <button
              aria-controls={`panel-${name}`}
              aria-selected={isActive}
              className={`tab w-full justify-start whitespace-normal sm:w-auto sm:justify-center sm:whitespace-nowrap ${isActive ? 'tab-active' : ''}`}
              id={`tab-${name}`}
              key={name}
              onClick={() => setActiveTab(name)}
              role="tab"
              type="button"
            >
              {title}
            </button>
          );
        })}
      </div>
      {activeProperty && (
        <div
          aria-labelledby={`tab-${activeProperty.name}`}
          id={`panel-${activeProperty.name}`}
          role="tabpanel"
          tabIndex={0}
        >
          {activeProperty.content}
        </div>
      )}
    </div>
  );
}
