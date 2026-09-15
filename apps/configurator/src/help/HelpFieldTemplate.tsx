import { Templates } from '@rjsf/daisyui';
import { getUiOptions, type FieldTemplateProps } from '@rjsf/utils';
import { HelpMedia } from './HelpMedia';
import { isFieldHelp } from './types';

const DaisyFieldTemplate = Templates.FieldTemplate!;

export function HelpFieldTemplate(props: FieldTemplateProps) {
  const help = getUiOptions(props.uiSchema).helpMedia;

  return (
    <div>
      <DaisyFieldTemplate {...props} />
      {isFieldHelp(help) && (
        <div className="-mt-2 mb-3">
          <HelpMedia help={help} />
        </div>
      )}
    </div>
  );
}
