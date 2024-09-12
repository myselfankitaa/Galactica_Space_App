"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavItem } from "@/app/destination/components/NavItem/page";
import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <li
              key={`NavBarItem -${index}`}
              className={classNames(styles.navbarLinks, {
                [styles.isActive]: item.link === currentPath,
              })}
            >
              <NavItem link={item.link} title={item.title} index={index} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
