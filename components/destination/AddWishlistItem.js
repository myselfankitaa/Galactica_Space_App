"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );
  const [name, setName] = useState([]);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const thumbnailChange = (event) => {
    onThumbnailChange(event.target.value);
  };

  const onAddItemPressed = () => {
    if (name && thumbnail) {
      onAddWishlistItem({ name, thumbnail });
      setName("");
      onThumbnailChange("/destination/image-europa.png");
    } else {
      alert(`Please provide the data`);
    }
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={name}
        onChange={onChangeName}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={thumbnailChange}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
