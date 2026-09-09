import { Form } from '@rjsf/daisyui';
import type { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

import defaultConfig from '../../valeros/public/config/valeros.config.json';
import rawSchema from '../../valeros/public/config/valeros.config.schema.json';
import { FacetRowTemplate } from './FacetRowTemplate';
import { IconSelectWidget } from './IconSelectWidget';
import {
  PresentationConfigTemplate,
  WidgetTemplate,
} from './PresentationConfigTemplate';
import { ViewRowTemplate } from './ViewRowTemplate';

const { $schema: _, ...rest } = rawSchema;
const schema = rest as RJSFSchema;
const formData = defaultConfig as Record<string, unknown>;

const widgetsUiSchema: UiSchema = {
  items: {
    'ui:ObjectFieldTemplate': WidgetTemplate,
    options: { 'ui:title': 'Opties' },
  },
};

const uiSchema: UiSchema = {
  $schema: {
    'ui:readonly': true,
  },
  facets: {
    items: {
      'ui:ObjectFieldTemplate': FacetRowTemplate,
      name: { 'ui:title': 'Naam' },
      label: { 'ui:title': 'Label' },
      icon: { 'ui:title': 'Icoon', 'ui:widget': IconSelectWidget },
      hidden: { 'ui:title': 'Verborgen' },
    },
  },
  views: {
    'ui:order': ['defaultView', 'views'],
    views: {
      items: {
        'ui:ObjectFieldTemplate': ViewRowTemplate,
        type: { 'ui:title': 'Type' },
        componentId: { 'ui:title': 'Component' },
        icon: { 'ui:title': 'Icoon', 'ui:widget': IconSelectWidget },
        label: { 'ui:title': 'Label' },
        presentationConfig: {
          'ui:ObjectFieldTemplate': PresentationConfigTemplate,
          widgets: widgetsUiSchema,
        },
      },
    },
  },
  presentation: {
    details: {
      widgets: widgetsUiSchema,
    },
  },
};

function downloadConfig(data: object) {
  const config = JSON.stringify(data, null, 2);
  const url = URL.createObjectURL(
    new Blob([config], { type: 'application/json' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = 'valeros.config.json';
  link.click();
  URL.revokeObjectURL(url);
}

export function App() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        validator={validator}
        onSubmit={({ formData: data }) => downloadConfig(data)}
      />
    </main>
  );
}
