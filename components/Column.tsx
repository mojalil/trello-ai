import { Draggable } from "react-beautiful-dnd";

type Props = {
  id: TypeColumn;
  todos: Todo[];
  index: number;
};

const Column = ({ id, todos, index }: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {
            // Render droppable for todos in the column
          }
        </div>
      )}
    </Draggable>
  );
};

export default Column;
