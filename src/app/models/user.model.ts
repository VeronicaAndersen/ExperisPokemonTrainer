import { Pokemon } from "./pokemon.model";

// Creates object from user API.
export interface User {
    id: number;
    username: string;
    collected: Pokemon[];
}