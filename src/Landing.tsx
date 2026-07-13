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
      {/* Mobile image containing both people */}
      <div className="dual-landing__mobile-photo">
        <img
          src={bothImage}
          alt={`${firstName} and ${secondName}`}
          className="dual-landing__mobile-photo-image"
        />

        <div className="dual-landing__mobile-photo-overlay" />
        <div className="dual-landing__mobile-photo-frame" />

        <div className="dual-landing__mobile-names">
          <span>{firstName}</span>
          <b>&amp;</b>
          <span>{secondName}</span>
        </div>
      </div>

      {/* Nedim — desktop left side */}
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

      {/* Invitation content — middle */}
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
          <p className="dual-landing__eyebrow">
            Together with their families
          </p>

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
            Invite you to celebrate the beginning of their
            forever—a day filled with love, laughter, elegance,
            and beautiful memories.
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
            View Invitation
            <span>↓</span>
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

      {/* Arlinda — desktop right side */}
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