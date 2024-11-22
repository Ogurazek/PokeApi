import styles from './pokemonDetail.module.css'

type PokemonDetailProps = {
    imgPokemonDetail: string;
    namePokemonDetail: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PokemonDetail({ imgPokemonDetail, namePokemonDetail, onClick }: PokemonDetailProps) {

    return (
        <>
            <article className={styles.container_pd}>
                <div className={styles.container_main_pd}>
                    <section className={styles.main_img_pd}>
                        <img src={imgPokemonDetail} alt="Pokemon" />
                    </section>
                    <section>
                        <strong>
                            {namePokemonDetail}
                        </strong>
                    </section>
                </div>
                <button onClick={onClick}>Return</button>
            </article>
        </>
    )
}