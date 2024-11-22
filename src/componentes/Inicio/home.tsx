import { useEffect, useState, useContext } from "react";
import styles from "../Inicio/homeStyles.module.css"
const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0";
import { CardPokemon } from "../card/card"
import PokemonDetail from '../pokemonDetail/pokemonDetail'
import { ThemeContext } from "../context/themeContext";


interface Pokemon {
    id: number;
    name: string;
    img: string;
    types: string[];
}
interface PokemonSelected {
    name: string;
    img: string;
}

type HomeProps = {
    actualizarEstadoNavbar: any;
}

export function Home({ actualizarEstadoNavbar }: HomeProps) {
    const [selectCard, setSelectCard] = useState<PokemonSelected | null>(null);
    const [pokemones, setPokemones] = useState<Pokemon[]>([]);
    const { theme } = useContext(ThemeContext)


    const handleCardSelect = (info: PokemonSelected) => {
        setSelectCard(info);
        actualizarEstadoNavbar(true)
    }
    const handleCardClose = () => {
        setSelectCard(null);
        actualizarEstadoNavbar(false)
    }

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

            {!selectCard &&
                <article className={theme ? styles.container_div_home_dark : styles.container_div_home_light}>
                    <div className={`${styles.container_div_home} ${theme ? styles.darkTheme : styles.lightTheme}`}>
                        {pokemones.map((pokemon) => {
                            return (
                                <CardPokemon key={pokemon.id} img={pokemon.img} name={pokemon.name} id={pokemon.id} type={pokemon.types} onClick={() => handleCardSelect(pokemon)} />
                            )
                        }
                        )}
                    </div>
                </article>
            }
            {selectCard && (
                <PokemonDetail
                    key={selectCard.name}
                    namePokemonDetail={selectCard.name}
                    imgPokemonDetail={selectCard.img}
                    onClick={handleCardClose}
                />
            )}

        </>
    );
}