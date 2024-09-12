"use client";

import { useEffect, useState } from "react";
import { PlanetWishlistItem } from "./components/planet_wishlist/page";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetCard } from "./components/planet_card/planetCard";

const planets = [
  {
    name: "EUROPA",
    description: `Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.`,
    thumbnail: "/destination/image-europa.png",
  },
  {
    name: "MARS",
    description: `Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.`,
    thumbnail: "/destination/image-mars.png",
  },
  {
    name: "MOON",
    description: `Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.`,
    thumbnail: "/destination/image-moon.png",
  },
  {
    name: "TITAN",
    description: `Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.`,
    thumbnail: "/destination/image-titan.png",
  },
];

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  let numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name, index) => {
    onAddPlanet((selectedPlanets) => {
      if (selectedPlanets.includes(name)) {
        return selectedPlanets.filter((planet) => planet !== name);
      } else {
        return [...selectedPlanets, name];
      }
    });
  };

  const removeFromWishlist = (name) => {
    onAddPlanet((selectedPlanets) =>
      selectedPlanets.filter((planet) => planet !== name)
    );
  };

  const onAddWishlistItem = ({ name, thumbnail }) => {
    onAddPlanet((selectedPlanets) => [...selectedPlanets, name]);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}

          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planet, index) => {
              const planetList = planets.find(
                (planetData) => planetData.name === planet
              );
              return (
                <PlanetWishlistItem
                  key={`wishlist-planet-${index}`}
                  name={planetList.name}
                  onRemove={removeFromWishlist}
                  thumbnail={planetList.thumbnail}
                />
              );
            })}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          {planets.map((planet, index) => (
            <PlanetCard
              key={`planet-${index}`}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isPlanetSelected={selectedPlanets.includes(planet.name)}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
              index={index}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
