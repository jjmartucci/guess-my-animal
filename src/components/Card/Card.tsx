import styles from "./Card.module.css";

type Props = {
  image: string;
  name: string;
  onClick?: (name: string) => void;
  dropped?: boolean;
};

const Card = (props: Props) => {
  const { dropped, name, image, onClick } = props;
  return (
    <div
      className={styles.Card}
      onClick={() => (onClick ? onClick(name) : console.log("hi"))}
      data-dropped={dropped}
    >
      <div className={styles.Card__BG} />
      <div className={styles.Card__Inner}>
        <img src={image} className={styles.Card__Image} />
        <span className={styles.Card__Name}>{name}</span>
      </div>
    </div>
  );
};

export default Card;
