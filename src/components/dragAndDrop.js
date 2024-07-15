import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'MATCH_OPTION';

export const DraggableItem = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, padding: '8px', border: '1px solid gray', marginBottom: '4px', cursor: 'move' }}>
      {text}
    </div>
  );
};

export const DropTarget = ({ id, accept, onDrop, currentItem }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} style={{ padding: '8px', border: '1px solid gray', minHeight: '40px', backgroundColor: isOver ? 'lightgreen' : 'white' }}>
      {currentItem ? currentItem.text : 'Drop here'}
    </div>
  );
};