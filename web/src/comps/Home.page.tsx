import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <div id="home-page">
      <article>
        <figure id="banner">
          <img src="/images/starfishBanner.jpg" alt="banner" />
          <div className="container">
            <figcaption>"It made a difference to that one"</figcaption>
          </div>
        </figure>
      </article>
      <div className="container">
        <article id="mission">
          Starfish Advocates is a 501(c)(3) nonprofit that promotes and currently assists the cause of domestic adoption in Missouri, Florida, and South Carolina while advancing
          the gospel of Jesus Christ.
        </article>
        <article>
          <div id="stats" className="grid fit">
            <section>
              <img src="/images/children.svg" alt="children waiting" />
              <p>123,000 children are awaiting adoption in the US</p>
              {/* <!--from AFCARS Report No. 25 https://www.acf.hhs.gov/sites/default/files/cb/afcarsreport25.pdf --> */}
            </section>
            <section>
              <img src="/images/givingIcon.svg" alt="support financially" />
              <p>
                We
                <br />
                SUPPORT CHILDREN
                <br />
                and provide
                <br />
                FINANCIAL ASSISTANCE
                <br />
                to adopting parents
              </p>
            </section>
            <section>
              <img src="/images/family.svg" alt="support family" />
              <p>
                Be an
                <br />
                ADMINISTRATIVE PARTNER
                <br />
                or contribute directly to
                <br />
                ADOPTING FAMILIES
              </p>
            </section>
          </div>
        </article>
        <article>
          <div id="starfishStory">
            <p>A young man is walking along the ocean and sees a beach on which thousands and thousands of starfish have washed ashore.</p>
            <p>Further along he sees an old man, walking slowly and stooping often, picking up one starfish after another and tossing each one gently into the ocean.</p>
            <p>“Why are you throwing starfish into the ocean?,” he asks.”</p>
            <p>“Because the sun is up and the tide is going out and if I don’t throw them further in they will die.”</p>
            <p>
              “But, old man, don’t you realize there are miles and miles of beach and starfish all along it! You can’t possibly save them all, you can’t even save one-tenth of
              them. In fact, even if you work all day, your efforts won’t make any difference at all.”
            </p>
            <p>The old man listened calmly and then bent down to pick up another starfish and threw it into the sea. “It made a difference to that one.”</p>
          </div>
        </article>
        <article>
          <div id="actionCall">
            <p>WE BELIEVE one motivated individual can make a difference.</p>
            <button className="btn-primary grow-on-hover actionCallButton" type="button" onClick={() => console.log("TODO")}>
              DONATE NOW
            </button>
            <p>Won’t YOU become an advocate today by donating to help a “starfish” in need?</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
