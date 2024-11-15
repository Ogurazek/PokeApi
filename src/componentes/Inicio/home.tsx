import { useEffect, useState } from "react";
import styles from "../Inicio/homeStyles.module.css"
const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0";
import { CardPokemon } from "../card/card"

interface Pokemon {
    id: number;
    name: string;
    img: string;
    types: string[];
}

export function Home() {
    const [pokemones, setPokemones] = useState<Pokemon[]>([]);

    useEffect(() => {
        async function API() {
            const res = await fetch(API_URL);
            const data = await res.json();
            const { results } = data;

            const profilePokemon = results.map(async (pokemon: { url: string }) => {
                const response = await fetch(pokemon.url)
                const poke = await response.json();
                // Esto me devuelve el tipo de cada pokemon. 
                const types = poke.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name);

                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other["official-artwork"].front_default,
                    types: types
                }
            })
            setPokemones(await Promise.all(profilePokemon));
        }
        API();
    }, []);

    return (
        <>
            <article className={styles.container_home}>
                <div className={styles.container_div_home}>
                    {pokemones.map((pokemon) => {
                        return (
                            <>
                                <CardPokemon img={pokemon.img} name={pokemon.name} id={pokemon.id} type={pokemon.types} />
                            </>
                        )
                    }
                    )}
                </div>
            </article>
        </>
    );
}