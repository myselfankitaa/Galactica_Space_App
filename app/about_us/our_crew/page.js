import styles from "./page.module.css";

const OurCrew = () => {
  return (
    <>
      <div className={styles.ourCrew}>
        <p>OUR CREW </p>
        <h1>Who are we</h1>
        <p>
          Our crew is the heart and soul of Galactica. We are a diverse team of
          seasoned space explorers, engineers, and visionaries who are united by
          a common goal: to make space travel accessible and exciting for all.
        </p>
      </div>
      <div className={styles.members}>
        <section className={styles.memberSection}>
          <img
            src={`/crew/Sarah.png`}
            alt="Picture of Captain Sarah"
            height={300}
          />
          <h3>Sarah Vega</h3>

          <strong>Captain</strong>

          <p>
            A former NASA astronaut with over 15 years of experience, Captain
            Vega leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </section>
        <section className={styles.memberSection}>
          <img
            src="/crew/Leo.png"
            alt="Pic of Astrophysicist Dr Leo"
            width={300}
            height={300}
          />
          <h3>Dr. Leo Redding</h3>

          <strong>Chief Astrophysicist</strong>

          <p>
            Our chief astrophysicist, Dr. Redding, is a renowned scientist who
            has contributed to major space discoveries. He ensures that every
            journey is as educational as it is exhilarating.
          </p>
        </section>
        <section className={styles.memberSection}>
          <img
            src="/crew/hana.webp"
            alt="Cheif Engineer Hana"
            width={300}
            height={300}
          />
          <h3>Hana Lee</h3>

          <strong>Chief Engineer</strong>

          <p>
            With her extensive background in aerospace engineering, Hana Lee is
            responsible for the state-of-the-art technology that powers our
            spacecraft. Her innovation ensures that our travelers are always in
            safe hands.
          </p>
        </section>
        <section className={styles.memberSection}>
          <img
            src="/crew/Alex_santosh.png"
            alt="Mission Specialist Alex"
            width={300}
            height={300}
          />
          <h3>Alex Santos</h3>

          <strong>Mission Specialist</strong>

          <p>
            As a mission specialist, Alex’s job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </section>
        <section className={styles.memberSection}>
          <img
            src="/crew/maya.webp"
            alt="Crew member Maya"
            width={300}
            height={300}
          />
          <h3>Maya Patel</h3>

          <strong>Crew Member</strong>

          <p>
            Maya brings a unique blend of technical skills and customer service
            experience to the team. She’s always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </p>
        </section>
      </div>
    </>
  );
};

export default OurCrew;
