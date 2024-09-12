"use client";

export const RoverPhoto = ({ src, date, roverName, index }) => {
  return (
    <div key={index}>
      <p> Date {date} </p>
      <img src={src} alt={roverName} />
    </div>
  );
};
