import { cycle } from "./cycle";

export interface CartItem {
    id: number;
    cycle: cycle;
    quantity: number;
    isCheckedOut: boolean;
}