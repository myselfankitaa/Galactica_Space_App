"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import { SocialMediaItem } from "@/app/destination/components/socialmedia/page";

const SocialMediaList = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com",
    icon: "/socialmedia/linkdin.png",
  },
  {
    title: "Facebook",
    url: "https://facebook.com",
    icon: "/socialmedia/facebook.png",
  },
  {
    title: "Instagram",
    url: "https://instagram.com",
    icon: "/socialmedia/instagram.png",
  },
  {
    title: "Tiktok",
    url: "https://tiktok.com",
    icon: "/socialmedia/tiktok.webp",
  },
];

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul className={styles.link}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us" target="_blank">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/destination" target="_blank">
              Destination
            </Link>
          </li>
          <li>
            <Link href="/nasa_collaboration" target="_blank">
              NASA_ Collaboration
            </Link>
          </li>
        </ul>
      </div>
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {SocialMediaList.map((el, index) => {
            return (
              <li>
                <SocialMediaItem
                  key={index}
                  url={el.url}
                  title={el.title}
                  icon={el.icon}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
