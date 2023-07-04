"use client";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
  const [getBoard, board] = useBoardStore((state) => [
    state.getBoard,
    state.board,
  ]);

  useEffect(() => {
    // Get the board
    getBoard();
  }, [getBoard]);

  return (
    <DragDropContext >
        <Droppable droppableId='board' direction='horizontal' type='column'>
            {(provided) => (
                <div>
                    {/* Render the all the colummn */}
                </div>
            )}
        </Droppable>
    </DragDropContext>
  );
};

export default Board;
