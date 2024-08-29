import styles from "./page.module.css";

const OurPartners = () => {
  // const partnerImages = [
  //   "alphabet-logo.png",
  //   "amazon_logo.png",
  //   "CBC_Logo_White.png",
  //   "Microsoft-Logo-white.png",
  //   "nyu-logo.png",
  //   "QueensLogo_white.png",
  //   "samsung-logo.png",
  //   "sodexo-logo.png",
  // ];
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
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
        {/* {partnerImages.map((fileName, index) => {
          console.log(`${fileName}`);
          console.log(`${index}`);
          <img
            key={index}
            src={`/business_partners/${fileName}`}
            alt={`business partner ${index + 1}`}
          />;
        })} */}
        {/* I tried to use the mao method to display the Image but it is not working as required so I commented it out to clear the query in the coming class. */}
        <img
          src="/business_partners/alphabet-logo.png"
          alt="alphabet_Logo"
          width={150}
          height={75}
        />
        <img
          src="/business_partners/amazon_logo.png"
          alt="amazon-logo"
          width={150}
          height={75}
        />
        <img
          src="/business_partners/CBC_Logo_White.png"
          alt="CBC-logo"
          width={150}
          height={75}
        />
        <img
          src="/business_partners/Microsoft-Logo-white.png"
          alt="microsoft-logo"
          width={150}
          height={75}
        />
        <img
          src="/business_partners/nyu-logo.png"
          alt="nyu-logo"
          width={150}
          height={75}
        />
        <img
          src="/business_partners/QueensLogo_white.png"
          alt="queens-logo"
          width={150}
          height={75}
        />
        <img
          src="/business_partners/samsung-logo.png"
          alt="samsung-logo"
          width={150}
          height={75}
        />
        <img
          src="/business_partners/sodexo-logo.png"
          alt="sodexo-logo"
          width={150}
          height={75}
        />
      </section>
    </>
  );
};

export default OurPartners;
