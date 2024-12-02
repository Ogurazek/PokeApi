
import styles from './pokemonDetail.module.css'
import { ArrowLeft } from 'lucide-react';


type PokemonDetailProps = {
    imgPokemonDetail: string;
    namePokemonDetail: string;
    numberPokemonDetail: number;
    type: string[];
    height: number;
    weight: number;
    baseState: any[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;

}

const baseStatsNames: { [key: string]: string } = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
};

export default function PokemonDetail({ imgPokemonDetail, namePokemonDetail, numberPokemonDetail, onClick, type, height, weight, baseState }: PokemonDetailProps) {

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
                        <div className={styles.about_props_container_pd}>
                            <div className={styles.about_props_pd_first}>
                                <img src="/weight.svg" alt="" />
                                <p>{weight} kg</p>
                                <span>Weight</span>
                            </div>
                            <div className={styles.about_props_pd_second}>
                                <img src="/Vector.svg" alt="" />
                                <p>{height} m</p>
                                <span>Height</span>
                            </div>
                        </div>
                        <header className={styles.container_state_title_pd}><p>Base State</p></header>
                        <section className={styles.container_state_pd}>
                            {baseState.map((stat, index) => (
                                <SectionState
                                    backgroundColor={firstTypeClass}
                                    key={index}
                                    numberState={stat.baseStat}
                                    nameState={baseStatsNames[stat.statName] || stat.statName}
                                />
                            ))}


                        </section>
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

function SectionState({ backgroundColor, numberState, nameState }: { backgroundColor: string, numberState: number, nameState: string }) {
    const maxState = 250;
    return (
        <>
            <article className={styles.container_line}>
                <div className={styles.container_line_title}><p>{nameState}</p></div>
                <span>{numberState}</span>
                <div className={styles.container_line_main}>
                    <div className={`${styles.container_line_main_first} ${backgroundColor}`}></div>
                    <div className={`${styles.container_line_second}  ${backgroundColor}`} style={{ width: `${(numberState / maxState) * 100}%` }}></div>
                </div>
            </article>
        </>
    )
}
