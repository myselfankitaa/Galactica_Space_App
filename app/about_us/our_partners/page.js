import styles from "./page.module.css";

const OurPartners = () => {
  const partnerImages = [
    "alphabet-logo.png",
    "amazon_logo.png",
    "CBC_Logo_White.png",
    "Microsoft-Logo-white.png",
    "nyu-logo.png",
    "QueensLogo_white.png",
    "samsung-logo.png",
    "sodexo-logo.png",
  ];

  return (
    <>
      <div className={styles.ourPartner}>
        <p>Our Partners</p>
        <p>
          We collaborate with some of the most respected names in the space and
          technology industries to make every journey extraordinary.
        </p>
      </div>
      <section className={styles.partner}>
        {partnerImages.map((fileName, index) => (
          <img
            key={index}
            src={`/business_partners/${fileName}`}
            alt={`business partner ${index + 1}`}
            width={150}
            height={75}
          />
        ))}
      </section>
    </>
  );
};

export default OurPartners;
