import { cycle } from "./cycle";

export interface BorrowedItem {
    id: number;
    cycle: cycle;
    quantity: number;
    cost: number;
}