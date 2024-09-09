import Link from "next/link";

export const NavItem = ({ title, link, isActive, index }) => {
  return (
    <>
      <Link href={link}>
        <b>{index < 10 ? `0${index + 1}` : `${index + 1}`}</b> {title}
      </Link>
      {{ link } ? isActive : "/"}
    </>
  );
};
