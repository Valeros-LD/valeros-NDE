import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  getTemplate,
  getUiOptions,
  type ArrayFieldItemTemplateProps,
} from '@rjsf/utils';
import { clsx } from 'clsx';
import type { CSSProperties } from 'react';

import gripIcon from '../assets/grip.svg';

export type SortableArrayItemProps = ArrayFieldItemTemplateProps & {
  separated?: boolean;
};

export function SortableArrayItemTemplate(props: SortableArrayItemProps) {
  return <SortableArrayItem {...props} />;
}

export function SortableArrayItem({
  buttonsProps,
  children,
  className,
  disabled,
  displayLabel,
  hasToolbar,
  index,
  itemKey,
  readonly,
  registry,
  separated = false,
  totalItems,
  uiSchema,
}: SortableArrayItemProps) {
  const uiOptions = getUiOptions(uiSchema);
  const ArrayFieldItemButtonsTemplate = getTemplate(
    'ArrayFieldItemButtonsTemplate',
    registry,
    uiOptions,
  );
  const canSort =
    !disabled &&
    !readonly &&
    (buttonsProps.hasMoveUp || buttonsProps.hasMoveDown);
  const {
    attributes,
    isDragging,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: itemKey, disabled: !canSort });
  const style: CSSProperties = {
    opacity: isDragging ? 0.6 : undefined,
    position: 'relative',
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 20 : undefined,
  };

  return (
    <fieldset
      ref={setNodeRef}
      className={clsx(
        'fieldset flex border border-base-300 bg-base-100 p-4',
        className,
        separated
          ? 'mb-4 rounded-lg'
          : index === 0
            ? 'rounded-t-lg -mb-px'
            : index === totalItems - 1
              ? 'rounded-b-lg'
              : '-mb-px',
      )}
      style={style}
    >
      {canSort && (
        <div className="flex justify-end">
          <button
            ref={setActivatorNodeRef}
            type="button"
            className="btn btn-ghost btn-sm cursor-grab touch-none px-2 active:cursor-grabbing"
            aria-label={`Drag item ${index + 1} of ${totalItems} to reorder`}
            {...attributes}
            {...listeners}
          >
            <img src={gripIcon} alt="" className="size-5" />
          </button>
        </div>
      )}
      {children}
      {hasToolbar && (
        <div
          className={clsx('flex justify-end', displayLabel ? 'mt-5' : 'mt-1')}
        >
          <ArrayFieldItemButtonsTemplate {...buttonsProps} />
        </div>
      )}
    </fieldset>
  );
}
