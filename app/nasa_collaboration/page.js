"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { RoverPhoto } from "../destination/components/RoverPhoto";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "TGhFbCo4AGXhf2KrBzaqxE8lUiEc8TDQM4deyc4s";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();
    console.log(roverPhoto);

    const fetchDailyPhotos = async () => {
      const dailyPhoto = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (res) => res.json()
      );

      setDailyImg(dailyPhoto);
    };

    fetchDailyPhotos();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>

          <div>
            <h3>{dailyImg.title}</h3>
            <p>{dailyImg.explanation}</p>
            <img src={dailyImg.url} />
          </div>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>

          {roverPhoto?.photos?.map((photo) => (
            <RoverPhoto
              date={photo.earth_date}
              className={styles.nasaPicOfTheDayImg}
              src={photo.img_src}
              roverName={photo.rover.name}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
