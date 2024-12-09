
import styles from './sectionType.module.css'
import { usePokemonGlobalContext } from '../context/pokemonGlobalContext'

export function SectionType() {

    const { handleCheckBox, typeSelected } = usePokemonGlobalContext();
    const pokemonTypes = [
        "grass", "fire", "water", "electric", "poison", "normal", "flying",
        "bug", "fighting", "ground", "rock", "dark", "dragon", "fairy",
        "steel", "ghost", "psychic", "ice"
    ];

    return (
        <>
            {pokemonTypes.map((type) => (
                <div key={type} className={`${styles.container_card_st} ${styles[type]}`}>
                    <input
                        type="checkbox"
                        name={type}
                        checked={typeSelected[type]}  // Ahora cada checkbox se sincroniza con el tipo correspondiente
                        onChange={handleCheckBox}  // Al cambiar el checkbox, se actualiza el estado global
                        id={type}
                    />
                    <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
                </div>
            ))}
        </>
    )
}