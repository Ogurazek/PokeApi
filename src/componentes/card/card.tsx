import styles from "../card/cardStyles.module.css"


type PokemonProps = {
  name: string;
  img: string;
  id: number;
  type: string[];
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export function CardPokemon({ name, img, id, type, onClick }: PokemonProps) {

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
  const borderTypeClass = (type: string) => {
    switch (type) {
      case "grass":
        return styles.border_grass;
      case "fire":
        return styles.border_fire;
      case "water":
        return styles.border_water;
      case "electric":
        return styles.border_electric;
      case "poison":
        return styles.border_poison;
      case "normal":
        return styles.border_normal;
      case "flying":
        return styles.border_flying;
      case "bug":
        return styles.border_bug;
      case "fighting":
        return styles.border_fighting;
      case "ground":
        return styles.border_ground;
      case "rock":
        return styles.border_rock;
      case "dark":
        return styles.border_dark;
      case "dragon":
        return styles.border_dragon;
      case "fairy":
        return styles.border_fairy;
      case "steel":
        return styles.border_steel;
      case "ghost":
        return styles.border_ghost;
      case "psychic":
        return styles.border_psychic;
      case "ice":
        return styles.border_ice;
      default:
        return '';
    }
  };

  const firstTypeClass = getTypeClass(type[0]);
  const firstBorderTypeClass = borderTypeClass(type[0]);

  return (

    <>
      <article className={`${styles.card_art} ${firstBorderTypeClass}`} onClick={onClick}>
        <section className={styles.card_sec_img}>
          <span className={styles.card_span_id}>#{id}</span>
          <img src={img} alt={name} />
        </section>
        <section className={`${styles.card_sec_title} ${firstTypeClass}`}>
          <strong>{name}</strong>
        </section>
      </article >
    </>
  )
}

