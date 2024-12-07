import { useState, useContext, useEffect } from "react";
import styles from "../Inicio/homeStyles.module.css"

import { CardPokemon } from "../card/card"
import PokemonDetail from '../pokemonDetail/pokemonDetail'
import { ThemeContext } from "../context/themeContext";
import { PokemonContext } from "../context/pokemonesContext";
import { SectionType } from "../SectionType/sectionType";



interface PokemonSelected {
    name: string;
    img: string;
    id: number;
    types: string[];
    height: number;
    weight: number;
    baseState: any[];
}

type HomeProps = {
    actualizarEstadoNavbar: any;
}

export function Home({ actualizarEstadoNavbar }: HomeProps) {
    const [selectCard, setSelectCard] = useState<PokemonSelected | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const { theme } = useContext(ThemeContext);

    const pokemonContext = useContext(PokemonContext);

    if (!pokemonContext) {
        throw new Error("PokemonContext debe ser usado dentro de un PokemonProvider");
    }

    const { pokemones, handleClickLoadMore, } = pokemonContext;

    const handleCardSelect = (info: PokemonSelected) => {
        saveScrollPosition()
        setSelectCard(info);
        actualizarEstadoNavbar(true);
    };


    const handleCardClose = () => {
        setSelectCard(null);
        actualizarEstadoNavbar(false);
    };


    const saveScrollPosition = () => {
        setScrollPosition(window.scrollY);
    };


    useEffect(() => {
        if (!selectCard) {
            window.scrollTo(0, scrollPosition);
        }
    }, [selectCard]);
    return (
        <>
            {!selectCard && (
                <article className={theme ? styles.container_div_home_dark : styles.container_div_home_light}>
                    <nav className={styles.containerSectionType}>
                        <section>
                            <SectionType />
                        </section>
                    </nav>
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
                        <div className={styles.container_btn_loadMore}>
                            <button className={`${styles.btn_loadMore} ${theme ? styles.darkTheme_btn : styles.lightTheme_btn}`} onClick={handleClickLoadMore}>Load More Pokemons</button>
                        </div>
                    </div>
                </article>
            )}
            {selectCard && (
                <PokemonDetail
                    key={selectCard.name}
                    namePokemonDetail={selectCard.name}
                    imgPokemonDetail={selectCard.img}
                    numberPokemonDetail={selectCard.id}
                    onClick={handleCardClose}
                    type={selectCard.types}
                    height={selectCard.height}
                    weight={selectCard.weight}
                    baseState={selectCard.baseState}
                />
            )}
        </>
    );
}
