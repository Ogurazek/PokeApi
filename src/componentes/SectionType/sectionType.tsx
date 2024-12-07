import styles from './sectionType.module.css'

export function SectionType() {
    return (
        <>
            <div className={`${styles.container_card_st} ${styles.grass}`}>
                <input
                    type="checkbox"
                    name="grass"
                    id="grass" />
                <label htmlFor="grass">Grass</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.fire}`}>
                <input
                    type="checkbox"
                    name="fire"
                    id="fire" />
                <label htmlFor="fire">Fire</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.water}`}>
                <input
                    type="checkbox"
                    name="water"
                    id="water" />
                <label htmlFor="water">Water</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.electric}`}>
                <input
                    type="checkbox"
                    name="electric"
                    id="electric" />
                <label htmlFor="electric">Electric</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.poison}`}>
                <input
                    type="checkbox"
                    name="poison"
                    id="poison" />
                <label htmlFor="poison">Poison</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.normal}`}>
                <input
                    type="checkbox"
                    name="normal"
                    id="normal" />
                <label htmlFor="normal">Normal</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.flying}`}>
                <input
                    type="checkbox"
                    name="flying"
                    id="flying" />
                <label htmlFor="flying">Flying</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.bug}`}>
                <input
                    type="checkbox"
                    name="bug"
                    id="bug" />
                <label htmlFor="bug">Bug</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.fighting}`}>
                <input
                    type="checkbox"
                    name="fighting"
                    id="fighting" />
                <label htmlFor="fighting">Fighting</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.ground}`}>
                <input
                    type="checkbox"
                    name="ground"
                    id="ground" />
                <label htmlFor="ground">Ground</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.rock}`}>
                <input
                    type="checkbox"
                    name="rock"
                    id="rock" />
                <label htmlFor="rock">Rock</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.dark}`}>
                <input
                    type="checkbox"
                    name="dark"
                    id="dark" />
                <label htmlFor="ground">Dark</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.dragon}`}>
                <input
                    type="checkbox"
                    name="dragon"
                    id="dragon" />
                <label htmlFor="ground">Dragon</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.fairy}`}>
                <input
                    type="checkbox"
                    name="fairy"
                    id="fairy" />
                <label htmlFor="fairy">Fairy</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.steel}`}>
                <input
                    type="checkbox"
                    name="steel"
                    id="steel" />
                <label htmlFor="steel">Steel</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.ghost}`}>
                <input
                    type="checkbox"
                    name="ghost"
                    id="ghost" />
                <label htmlFor="ghost">Ghost</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.psychic}`}>
                <input
                    type="checkbox"
                    name="psychic"
                    id="psychic" />
                <label htmlFor="psychic">Psychic</label>
            </div>
            <div className={`${styles.container_card_st} ${styles.ice}`}>
                <input
                    type="checkbox"
                    name="ice"
                    id="ice" />
                <label htmlFor="ice">Ice</label>
            </div>
        </>
    )
}