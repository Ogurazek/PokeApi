import { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface PokemonGlobal {
    id: number;
    name: string;
    img: string;
    types: string[];
    height: number;
    weight: number;
    baseState: string[];
}

interface PokemonContextType {
    pokemonesGlobal: PokemonGlobal[];
    handleClickLoadMore: () => void;
    handleCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
    saveScrollPosition: () => void;
    restoreScrollPosition: () => void;
    setPokemonesGlobal: React.Dispatch<React.SetStateAction<PokemonGlobal[]>>;
    filteredPokemon: PokemonGlobal[];
    typeSelected: Record<string, boolean>;
}

// 1- crear el context 
// 2- Crear el Provider, es decir, el componente
// 3- Crear los estados y demás
// 4- Poner el Providar en el componente Padre
// 5- Usar esos estados en los demás componentes. 





export const PokemonGlobalContext = createContext<PokemonContextType | null>(null);

interface PokemonProviderProps {
    children: ReactNode;
}

export function PokemonGlobalProvider({ children }: PokemonProviderProps) {
    const [pokemonesGlobal, setPokemonesGlobal] = useState<PokemonGlobal[]>([]);
    const [offset, setOffset] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleClickLoadMore = () => {
        setOffset(offset + 15)
    }

    const saveScrollPosition = () => {
        setScrollPosition(window.scrollY); // Guardar posición actual
    };

    const restoreScrollPosition = () => {
        window.scrollTo(0, scrollPosition); // Restaurar posición guardada
    };


    useEffect(() => {
        async function API() {
            const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
            const res = await fetch(API_URL);
            const data = await res.json();
            const { results } = data;



            const profilePokemon = results.map(async (pokemon: { url: string }) => {
                const response = await fetch(pokemon.url);
                const poke = await response.json();

                const types = poke.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name);
                const baseStats = poke.stats.map((statInfo: { base_stat: number; stat: { name: string } }) => {
                    return {
                        statName: statInfo.stat.name,
                        baseStat: statInfo.base_stat,
                    };
                });



                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other["official-artwork"].front_default,
                    types: types,
                    height: poke.height,
                    weight: poke.weight,
                    baseState: baseStats,



                };
            });
            const newPokemones = await Promise.all(profilePokemon);

            setPokemonesGlobal((prevPokemones) => {
                const existingIds = new Set(prevPokemones.map((poke) => poke.id));
                const uniquePokemones = newPokemones.filter((poke) => !existingIds.has(poke.id));
                return [...prevPokemones, ...uniquePokemones];
            });


        }
        API();
    }, [offset]);

    const [typeSelected, setTypeSelected] = useState<Record<string, boolean>>(() => {
        // Cargar el estado inicial desde localStorage o usar valores predeterminados
        const saved = localStorage.getItem("typeSelected");
        return saved ? JSON.parse(saved) : {
            grass: false,
            normal: false,
            fighting: false,
            flying: false,
            poison: false,
            ground: false,
            rock: false,
            bug: false,
            ghost: false,
            steel: false,
            fire: false,
            water: false,
            electric: false,
            psychic: false,
            ice: false,
            dragon: false,
            dark: false,
            fairy: false,
            unknown: false,
            shadow: false,
        };
    });



    const [filteredPokemon, setFilteredPokemon] = useState<PokemonGlobal[]>([]);

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        if (checked) {

            setTypeSelected(() => ({
                [name]: true,
            }));


            const filteredResults = pokemonesGlobal.filter((pokemon) =>
                pokemon.types.includes(name)
            );
            setFilteredPokemon(filteredResults);
        } else {

            setTypeSelected(() => ({}));
            setFilteredPokemon([]);
        }
    };


    return (
        <PokemonGlobalContext.Provider value={{
            pokemonesGlobal,
            setPokemonesGlobal,
            handleClickLoadMore,
            restoreScrollPosition,
            saveScrollPosition,
            handleCheckBox,
            filteredPokemon,
            typeSelected

        }}>
            {children}
        </PokemonGlobalContext.Provider>
    );
}

export const usePokemonGlobalContext = () => {
    const context = useContext(PokemonGlobalContext);
    if (!context) {
        throw new Error("usePokemonGlobalContext debe usarse dentro de un PokemonGlobalProvider");
    }
    return context;
};