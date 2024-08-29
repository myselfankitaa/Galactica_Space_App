import styles from "./page.module.css";
import OurValues from "./our_values/page";
import OurCrew from "./our_crew/page";
import OurPartners from "./our_partners/page";

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <p>
          At Galactica, our mission is to unlock the wonders of the universe for
          everyone. We believe that space is the final frontier and that the
          opportunity to explore it should be within everyone’s reach. Our
          journeys are designed to inspire, educate, and provide a
          once-in-a-lifetime experience that transcends the ordinary.
        </p>
        <section className="card">
          <OurValues />
        </section>
        <section className="card">
          <OurCrew />
        </section>

        <section className="card">
          <OurPartners />
        </section>

        {/* TASK - React 1 week 1 */}
        {/* Add in the "OurPartners" component here */}
      </main>
    </div>
  );
};

export default Crew;
