import { useState, useContext } from "react";
import styles from "../Inicio/homeStyles.module.css"

import { CardPokemon } from "../card/card"
import PokemonDetail from '../pokemonDetail/pokemonDetail'
import { ThemeContext } from "../context/themeContext";
import { PokemonContext } from "../context/pokemonesContext";


interface PokemonSelected {
    name: string;
    img: string;
}

type HomeProps = {
    actualizarEstadoNavbar: any;
}

export function Home({ actualizarEstadoNavbar }: HomeProps) {
    const [selectCard, setSelectCard] = useState<PokemonSelected | null>(null);
    const { theme } = useContext(ThemeContext);

    const pokemonContext = useContext(PokemonContext);

    if (!pokemonContext) {
        throw new Error("PokemonContext debe ser usado dentro de un PokemonProvider");
    }

    const { pokemones } = pokemonContext;

    const handleCardSelect = (info: PokemonSelected) => {
        setSelectCard(info);
        actualizarEstadoNavbar(true);
    };

    const handleCardClose = () => {
        setSelectCard(null);
        actualizarEstadoNavbar(false);
    };

    return (
        <>
            {!selectCard && (
                <article className={theme ? styles.container_div_home_dark : styles.container_div_home_light}>
                    <div className={`${styles.container_div_home} ${theme ? styles.darkTheme : styles.lightTheme}`}>
                        {pokemones.map((pokemon) => (
                            <CardPokemon
                                key={pokemon.id}
                                img={pokemon.img}
                                name={pokemon.name}
                                id={pokemon.id}
                                type={pokemon.types}
                                onClick={() => handleCardSelect(pokemon)}
                            />
                        ))}
                    </div>
                </article>
            )}
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
