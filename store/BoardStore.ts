import { create } from "zustand";
interface BoardState {
    board: Board;
    getBoard: () => void;
    // setBoard: (board: Board) => void;
    // resetBoard: () => void;
}


const useBoardStore = create((set) => ({
    board: null,
    getBoard: () => {
    },
}));

