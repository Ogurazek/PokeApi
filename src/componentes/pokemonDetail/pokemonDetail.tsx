
import styles from './pokemonDetail.module.css'
import { ArrowLeft } from 'lucide-react';


type PokemonDetailProps = {
    imgPokemonDetail: string;
    namePokemonDetail: string;
    numberPokemonDetail: number;
    type: string[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;

}

export default function PokemonDetail({ imgPokemonDetail, namePokemonDetail, numberPokemonDetail, onClick, type }: PokemonDetailProps) {

    const getTypeClass = (type: string) => {
        switch (type) {
            case "grass":
                return styles.grass;
            case "fire":
                return styles.fire;
            case "water":
                return styles.water;
            case "electric":
                return styles.electric;
            case "poison":
                return styles.poison;
            case "normal":
                return styles.normal;
            case "flying":
                return styles.flying;
            case "bug":
                return styles.bug;
            case "dragon":
                return styles.dragon;
            case "fighting":
                return styles.fighting;
            case "ground":
                return styles.ground;
            case "rock":
                return styles.rock;
            case "dark":
                return styles.dark;
            case "fairy":
                return styles.fairy;
            case "steel":
                return styles.steel;
            case "ghost":
                return styles.ghost;
            case "psychic":
                return styles.psychic;
            case "ice":
                return styles.ice;
            default:
                return '';
        }
    };

    const firstTypeClass = getTypeClass(type[0]);



    return (
        <>
            <article className={`${styles.container_pd} ${firstTypeClass}`}>
                <div className={styles.container_main_pd}>
                    <section className={styles.container_header_pd}>
                        <div className={styles.container_nav_pd}>
                            <button className={styles.button_pd} onClick={onClick}><ArrowLeft size={22} /></button>
                            <strong>{namePokemonDetail}</strong>
                        </div>
                        <div className={styles.container_numeral_pd}><p>#{numberPokemonDetail}</p></div>
                    </section>
                    <div className={styles.img_background_pd} >
                        <img src="/Pokeball.svg" alt="" />
                    </div>
                    <section className={styles.main_img_pd}>
                        <div className={styles.main_img_pd_div}>
                            <img src={imgPokemonDetail} alt="Pokemon" />
                        </div>
                    </section>
                    <section className={styles.about_poke_pd}>
                        <header className={styles.about_type_pd}>
                            {type.map((tipos) => (
                                <CardTypePokemon
                                    key={tipos}
                                    cardType={tipos}
                                    typeClass={getTypeClass(tipos)} />
                            ))}
                        </header>
                        <div className={styles.about_pd}><strong style={{ color: `${firstTypeClass}` }}>About</strong></div>
                    </section>
                </div>
            </article>
        </>
    )
}

function CardTypePokemon({ cardType, typeClass }: { cardType: string, typeClass: string }) {
    return (
        <div className={`${styles.cardType} ${typeClass}`}><p>{cardType}</p></div>
    )
}
