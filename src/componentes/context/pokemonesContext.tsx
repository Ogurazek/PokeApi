import { createContext, useState, useEffect, ReactNode } from "react";

interface Pokemon {
    id: number;
    name: string;
    img: string;
    types: string[];
}

interface PokemonContextType {
    pokemones: Pokemon[];
    setPokemones: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

// 1- crear el context 
// 2- Crear el Provider, es decir, el componente
// 3- Crear los estados y demás
// 4- Poner el Providar en el componente Padre
// 5- Usar esos estados en los demás componentes. 

const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0";

export const PokemonContext = createContext<PokemonContextType | null>(null);

interface PokemonProviderProps {
    children: ReactNode;
}

export function PokemonProvider({ children }: PokemonProviderProps) {
    const [pokemones, setPokemones] = useState<Pokemon[]>([]);


    useEffect(() => {
        async function API() {
            const res = await fetch(API_URL);
            const data = await res.json();
            const { results } = data;

            const profilePokemon = results.map(async (pokemon: { url: string }) => {
                const response = await fetch(pokemon.url);
                const poke = await response.json();
                const types = poke.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name);

                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other["official-artwork"].front_default,
                    types: types,
                };
            });
            setPokemones(await Promise.all(profilePokemon));
        }
        API();
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemones, setPokemones }}>
            {children}
        </PokemonContext.Provider>
    );
}
