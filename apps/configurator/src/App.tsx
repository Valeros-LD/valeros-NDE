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

const iconUiSchema: UiSchema = {
  'ui:widget': IconSelectWidget,
};

const widgetsUiSchema: UiSchema = {
  items: {
    'ui:ObjectFieldTemplate': WidgetTemplate,
    options: { icon: iconUiSchema },
  },
};

const uiSchema: UiSchema = {
  facets: {
    items: {
      'ui:ObjectFieldTemplate': FacetRowTemplate,
      icon: iconUiSchema,
    },
  },
  views: {
    'ui:order': ['defaultView', 'views'],
    views: {
      items: {
        'ui:ObjectFieldTemplate': ViewRowTemplate,
        icon: iconUiSchema,
        presentationConfig: {
          'ui:order': ['showArrowIndicator', 'widgets'],
          'ui:ObjectFieldTemplate': PresentationConfigTemplate,
          widgets: widgetsUiSchema,
        },
      },
    },
  },
  presentation: {
    details: {
      'ui:order': ['showArrowIndicator', 'widgets'],
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
