import styles from './pokemonDetail.module.css'
import { ArrowLeft } from 'lucide-react';

type PokemonDetailProps = {
    imgPokemonDetail: string;
    namePokemonDetail: string;
    numberPokemonDetail: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PokemonDetail({ imgPokemonDetail, namePokemonDetail, numberPokemonDetail, onClick }: PokemonDetailProps) {

    return (
        <>
            <article className={styles.container_pd}>
                <div className={styles.container_main_pd}>
                    <section className={styles.container_header_pd}>
                        <div className={styles.container_nav_pd}>
                            <button className={styles.button_pd} onClick={onClick}><ArrowLeft size={20} /></button>
                            <strong>{namePokemonDetail}</strong>
                        </div>
                        <div className={styles.container_numeral_pd}>#{numberPokemonDetail}</div>
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
                            <CardTypePokemon cardType="Grass" />
                            <CardTypePokemon cardType="Poison" />
                        </header>
                        <div className={styles.about_pd}><strong>About</strong></div>
                    </section>
                </div>
            </article>
        </>
    )
}

function CardTypePokemon({ cardType }: { cardType: string }) {
    return (
        <>
            <div className={styles.cardType}><p>{cardType}</p></div>
        </>
    )
}