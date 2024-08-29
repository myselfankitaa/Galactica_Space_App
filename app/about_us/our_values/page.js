import styles from "./page.module.css";

const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <div className={styles.ourValues}>
        <p>OUR VALUES</p>
        <div className={styles.container}>
          <section className={styles.value}>
            <h2>01</h2>
            <h4>Exploration:</h4>
            <p>
              We are driven by a deep-seated desire to explore the unknown. We
              believe that the pursuit of discovery is at the heart of human
              nature, and we are committed to pushing the boundaries of what is
              possible.
            </p>

            <hr />
          </section>
          <section className={styles.value}>
            <h2>02</h2>
            <h4>Innovation:</h4>
            <p>
              At Galactica, we prioritize cutting-edge technology and
              innovation. We are constantly evolving our spacecraft, safety
              protocols, and services to ensure that our travelers experience
              the most advanced and secure space journeys available.
            </p>

            <hr />
          </section>
          <section className={styles.value}>
            <h2>03</h2>
            <h4>Sustainability:</h4>
            <p>
              We are committed to making space exploration sustainable for
              future generations. Our space missions are designed to minimize
              environmental impact, both on Earth and in space, and to foster a
              spirit of responsibility towards our universe.
            </p>

            <hr />
          </section>
          <section className={styles.value}>
            <h2>04</h2>
            <h4>Community:</h4>
            <p>
              Community: We believe in the power of collective exploration. Our
              journeys are not just about reaching new destinations; they are
              about building a community of space enthusiasts who share a
              passion for the stars.
            </p>

            <hr />
          </section>
        </div>
      </div>
    </>
  );
};

export default OurValues;
