'use client'
import { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Board = () => {

    useEffect(() => {
        // Get the board

    }, [])

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
    )
}

export default Board