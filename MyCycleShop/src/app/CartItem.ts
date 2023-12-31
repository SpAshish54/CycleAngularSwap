import { cycle } from "./cycle";

export interface CartItem {
    id: number;
    cycle: cycle;
    quantity: number;
    cost: number;
    isCheckedOut: boolean;
}