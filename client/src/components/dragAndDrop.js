import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'MATCH_OPTION';

export const DraggableItem = ({ id, text, fontSize }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, padding: '8px', border: '1px solid gray', marginBottom: '4px', cursor: 'move', fontSize: `${fontSize}rem` }}>
      {text}
    </div>
  );
};

export const DropTarget = ({ id, accept, onDrop, currentItem, fontSize }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    canDrop: () => !currentItem,  // Prevent user from droppingn in new options of the dropTarget already contains one
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  // Determine what the background colour should be
  const getBackgroundColour = () => {
    if (isOver && canDrop) {return 'lightgreen'}
    if (isOver && !canDrop) {return 'grey'}
    return 'white';
  }

  return (
    <div ref={drop} style={{ padding: '8px', border: '1px solid gray', minHeight: '40px', backgroundColor: getBackgroundColour(), fontSize: `${fontSize}rem` }}>
      {currentItem ? currentItem.text : 'Drop here'}
    </div>
  );
};