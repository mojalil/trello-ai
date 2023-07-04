import { getTodosGroupsByColumn } from "@/lib/getTodosGroupedByColumn";
import { create } from "zustand";
interface BoardState {
    board: Board;
    getBoard: () => void;
    // setBoard: (board: Board) => void;
    // resetBoard: () => void;
}


export const useBoardStore = create<BoardState>((set) => ({
    board: {
        columns: new Map<TypeColumn, Column>(),
    },
    getBoard: async () => {
        const board = await getTodosGroupsByColumn();
        set({ board})
    },
}));


