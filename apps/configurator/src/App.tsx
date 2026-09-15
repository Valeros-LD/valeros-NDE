import { Form } from '@rjsf/daisyui';
import type { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

import defaultConfig from '../../valeros/public/config/valeros.config.json';
import rawSchema from '../../valeros/public/config/valeros.config.schema.json';
import { FacetRowTemplate } from './FacetRowTemplate';
import {
  arrowIndicatorHelp,
  filtersHelp,
  paginationHelp,
  resultsCountHelp,
  sortingHelp,
  viewSwitchingHelp,
} from './help/content';
import { HelpFieldTemplate } from './help/HelpFieldTemplate';
import { IconSelectWidget } from './IconSelectWidget';
import {
  PresentationConfigTemplate,
  WidgetTemplate,
} from './PresentationConfigTemplate';
import { TabbedObjectFieldTemplate } from './TabbedObjectFieldTemplate';
import { ViewRowTemplate } from './ViewRowTemplate';

const { $schema: _, ...rest } = rawSchema;
const schema = rest as RJSFSchema;
const formData = defaultConfig as Record<string, unknown>;

const iconUiSchema: UiSchema = {
  'ui:widget': IconSelectWidget,
};

const HiddenArrayFieldTitleTemplate = () => null;

const widgetItemUiSchema: UiSchema = {
  'ui:ObjectFieldTemplate': WidgetTemplate,
  properties: {
    'ui:ArrayFieldTitleTemplate': HiddenArrayFieldTitleTemplate,
  },
  options: {
    'ui:title': '',
    icon: iconUiSchema,
  },
};

const widgetsUiSchema: UiSchema = {
  'ui:ArrayFieldTitleTemplate': HiddenArrayFieldTitleTemplate,
  items: widgetItemUiSchema,
};

const searchResultPresentationUiSchema: UiSchema = {
  'ui:order': ['showArrowIndicator', 'widgets'],
  showArrowIndicator: {
    'ui:FieldTemplate': HelpFieldTemplate,
    'ui:options': {
      helpMedia: arrowIndicatorHelp,
    },
  },
  widgets: widgetsUiSchema,
};

const detailsPresentationUiSchema: UiSchema = {
  widgets: widgetsUiSchema,
};

const uiSchema: UiSchema = {
  'ui:ObjectFieldTemplate': TabbedObjectFieldTemplate,
  facets: {
    items: {
      'ui:ObjectFieldTemplate': FacetRowTemplate,
      'ui:options': {
        helpMedia: filtersHelp,
      },
      icon: iconUiSchema,
    },
  },
  views: {
    'ui:order': ['defaultView', 'views'],
    views: {
      items: {
        'ui:ObjectFieldTemplate': ViewRowTemplate,
        'ui:options': {
          helpMedia: viewSwitchingHelp,
        },
        icon: iconUiSchema,
        options: {
          'ui:title': '',
          showPagination: {
            'ui:FieldTemplate': HelpFieldTemplate,
            'ui:options': {
              helpMedia: paginationHelp,
            },
          },
          showResultsCount: {
            'ui:FieldTemplate': HelpFieldTemplate,
            'ui:options': {
              helpMedia: resultsCountHelp,
            },
          },
          showSort: {
            'ui:FieldTemplate': HelpFieldTemplate,
            'ui:options': {
              helpMedia: sortingHelp,
            },
          },
        },
        presentationConfig: {
          ...searchResultPresentationUiSchema,
          'ui:ObjectFieldTemplate': PresentationConfigTemplate,
        },
      },
    },
  },
  detailsPresentation: detailsPresentationUiSchema,
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
