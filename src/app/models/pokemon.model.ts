export interface Pokemon {
    name: string;
    url: string;
}


export interface PokemonData{
    results: Array<Pokemon>;
}