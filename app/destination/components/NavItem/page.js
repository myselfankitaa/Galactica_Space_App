import Link from "next/link";

export const NavItem = ({ title, link, isActive, index }) => {
  return (
    <>
      <Link href={link}>
        <b>{`0${index}`}</b> {title}
      </Link>
      {{ link } ? isActive : "/"}
    </>
  );
};
