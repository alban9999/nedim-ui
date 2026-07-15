import "./landing.css";
import nedimImage from "./images/nedim.jpeg";
import arlindaImage from "./images/arlinda.jpeg";
import bothImage from "./images/landing.jpeg";

type LandingProps = {
  firstName: string;
  secondName: string;
  initials: string;
  dayName: string;
  dateText: string;
  ceremonyTime: string;
  visible: boolean;
  onViewInvitation: () => void;
};

export const Landing = ({
  firstName,
  secondName,
  initials,
  dayName,
  dateText,
  ceremonyTime,
  visible,
  onViewInvitation,
}: LandingProps) => {
  return (
    <section
      id="home"
      className={`dual-landing ${
        visible ? "dual-landing--visible" : ""
      }`}
    >
      {/* Mobile: one full-screen photo with content over it */}
      <div className="dual-landing__mobile-photo">
        <img
          src={bothImage}
          alt={`${firstName} and ${secondName}`}
          className="dual-landing__mobile-photo-image"
        />

        <div
          className="dual-landing__mobile-photo-overlay"
          aria-hidden="true"
        />
        <div
          className="dual-landing__mobile-photo-frame"
          aria-hidden="true"
        />

        <div
          className="dual-landing__mobile-monogram"
          aria-hidden="true"
        >
          {initials}
        </div>

        <div className="dual-landing__mobile-content">
          <p className="dual-landing__mobile-eyebrow">
            Jeni të ftuar në dasmën e
          </p>

          <h1 className="dual-landing__mobile-names">
            <span>{firstName}</span>
            <b>&amp;</b>
            <span>{secondName}</span>
          </h1>

          <div className="dual-landing__mobile-date">
            <span>{dayName}</span>
            <strong>{dateText}</strong>
            <span>{ceremonyTime}</span>
          </div>

          <button
            type="button"
            className="dual-landing__mobile-button"
            onClick={onViewInvitation}
          >
            <span>Shiko ftesën</span>
            <span
              className="dual-landing__button-arrow"
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>
      </div>

      {/* Desktop: groom portrait */}
      <div className="dual-landing__portrait dual-landing__portrait--left">
        <img
          src={nedimImage}
          alt={`${firstName}, the groom`}
          className="dual-landing__image"
        />

        <div className="dual-landing__image-shade" />
        <div className="dual-landing__image-frame" />

        <div className="dual-landing__person-name">
          <span>The Groom</span>
          <strong>{firstName}</strong>
        </div>
      </div>

      {/* Desktop: invitation content */}
      <div className="dual-landing__center">
        <div
          className="dual-landing__petals"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="dual-landing__content">
         
          <h1 className="dual-landing__names">
            <span>{firstName}</span>
            <b>&amp;</b>
            <span>{secondName}</span>
          </h1>

          <div className="dual-landing__flourish">
            <span />
            <b>❦</b>
            <span />
          </div>

          <p className="dual-landing__introduction">
            Me shumë dashuri dhe gëzim, ju ftojmë të festoni së bashku me ne ditën më të veçantë të jetës sonë.
          </p>

          <div className="dual-landing__date">
            <span>{dayName}</span>
            <strong>{dateText}</strong>
            <span>{ceremonyTime} Evening Ceremony</span>
          </div>

          <button
            type="button"
            className="dual-landing__button"
            onClick={onViewInvitation}
          >
            <span>Shiko ftesën</span>
            <span
              className="dual-landing__button-arrow"
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>

        <div
          className="dual-landing__monogram"
          aria-hidden="true"
        >
          {initials}
        </div>

        <button
          type="button"
          className="dual-landing__scroll"
          onClick={onViewInvitation}
          aria-label="Scroll to the invitation"
        >
          <span>Discover our celebration</span>
          <i />
        </button>
      </div>

      {/* Desktop: bride portrait */}
      <div className="dual-landing__portrait dual-landing__portrait--right">
        <img
          src={arlindaImage}
          alt={`${secondName}, the bride`}
          className="dual-landing__image"
        />

        <div className="dual-landing__image-shade" />
        <div className="dual-landing__image-frame" />

        <div className="dual-landing__person-name">
          <span>The Bride</span>
          <strong>{secondName}</strong>
        </div>
      </div>
    </section>
  );
};

export default Landing;
