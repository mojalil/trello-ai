import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  id: TypeColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText : {
    [key in TypeColumn]: string
} = {
    "todo": "To Do",
    "inprogress": "In Progress",
    "done": "Done"
}

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
            <Droppable droppableId={index.toString()} type="card">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-2 rounded-2xl shadow-sm ${
                    snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                  }`}
                >

                    <h2>
                        {idToColumnText[id]}
                    </h2>
                </div>
              )}
            </Droppable>
          }
        </div>
      )}
    </Draggable>
  );
};

export default Column;
