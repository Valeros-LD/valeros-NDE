import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  buttonId,
  getTemplate,
  getUiOptions,
  TranslatableString,
  type ArrayFieldTemplateProps,
} from '@rjsf/utils';
import {
  useCallback,
  type MouseEvent,
  type ReactElement,
} from 'react';

type InternalArrayItemProps = {
  handleReorderItems?: (
    event: undefined,
    index: number,
    newIndex: number,
  ) => void;
};

export function SortableArrayFieldTemplate({
  canAdd,
  className,
  disabled,
  fieldPathId,
  items,
  optionalDataControl,
  onAddClick,
  readonly,
  registry,
  required,
  schema,
  title,
  uiSchema,
}: ArrayFieldTemplateProps) {
  const uiOptions = getUiOptions(uiSchema);
  const ArrayFieldDescriptionTemplate = getTemplate(
    'ArrayFieldDescriptionTemplate',
    registry,
    uiOptions,
  );
  const ArrayFieldTitleTemplate = getTemplate(
    'ArrayFieldTitleTemplate',
    registry,
    uiOptions,
  );
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;
  const showOptionalDataControlInTitle = !readonly && !disabled;
  const itemIds = items.map((item, index) => String(item.key ?? index));
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleAddClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      onAddClick(event);
    },
    [onAddClick],
  );

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (!over || active.id === over.id) {
        return;
      }

      const index = itemIds.indexOf(String(active.id));
      const newIndex = itemIds.indexOf(String(over.id));
      const item = items[index] as ReactElement<InternalArrayItemProps>;
      item.props.handleReorderItems?.(undefined, index, newIndex);
    },
    [itemIds, items],
  );

  return (
    <div className={`array-field-template ${className}`}>
      <ArrayFieldTitleTemplate
        fieldPathId={fieldPathId}
        title={uiOptions.title || title}
        schema={schema}
        uiSchema={uiSchema}
        required={required}
        registry={registry}
        optionalDataControl={
          showOptionalDataControlInTitle ? optionalDataControl : undefined
        }
      />
      <ArrayFieldDescriptionTemplate
        fieldPathId={fieldPathId}
        description={uiOptions.description || schema.description}
        schema={schema}
        uiSchema={uiSchema}
        registry={registry}
      />
      <div className="flex flex-col gap-4">
        {!showOptionalDataControlInTitle ? optionalDataControl : undefined}
        <DndContext
          accessibility={{
            screenReaderInstructions: {
              draggable:
                'To pick up an item, press space or enter. Use the arrow keys to move it, then press space or enter to drop it. Press escape to cancel.',
            },
          }}
          collisionDetection={closestCenter}
          sensors={sensors}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={itemIds}
            strategy={verticalListSortingStrategy}
          >
            <div className="rjsf-array-item-list">
              {items}
              {items.length === 0 && canAdd && (
                <div className="text-center italic text-base-content/70">
                  {TranslatableString.EmptyArray}
                </div>
              )}
            </div>
          </SortableContext>
        </DndContext>
        {canAdd && (
          <div className="flex justify-end">
            <AddButton
              id={buttonId(fieldPathId, 'add')}
              className="rjsf-array-item-add btn btn-primary btn-sm"
              onClick={handleAddClick}
              disabled={disabled || readonly}
              uiSchema={uiSchema}
              registry={registry}
            />
          </div>
        )}
      </div>
    </div>
  );
}
