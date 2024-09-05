import Link from "next/link";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <>
      <Link href={url} target="_blank">
        <img src={icon} alt={title} width={20} height={20} />
      </Link>
    </>
  );
};
