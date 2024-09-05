import styles from "@/components/destination/destination.module.css";

export const PlanetCard = ({
  name,
  description,
  thumbnail,
  isPlanetSelected,
  onAddOrRemovePlanet,
  index,
}) => {
  return (
    <>
      <div className={styles.planetCard}>
        <img className={styles.planetThumbnail} src={thumbnail} alt="" />
        <div className={styles.planetDescription}>
          <h2>
            {name} {isPlanetSelected ? "- SELECTED" : ""}
          </h2>
          <p>{description}</p>
        </div>
        <button
          className="roundButton"
          onClick={() => onAddOrRemovePlanet(name, index)}
        >
          {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
        </button>
      </div>
    </>
  );
};
