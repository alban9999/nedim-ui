import venueImage from "./images/venue.jpeg";
import "./venue.css";

type VenueProps = {
  dayName: string;
  dateText: string;
  ceremonyTime: string;
  venueName: string;
  venueAddress: string;
  mapUrl: string;
};

export const Venue = ({
  dayName,
  dateText,
  ceremonyTime,
  venueName,
  venueAddress,
  mapUrl,
}: VenueProps) => {
  return (
    <section id="venue" className="wedding-venue">
      <div
        className="wedding-venue__background-glow"
        aria-hidden="true"
      />

      <div
        className="wedding-venue__circle wedding-venue__circle--one"
        aria-hidden="true"
      />

      <div
        className="wedding-venue__circle wedding-venue__circle--two"
        aria-hidden="true"
      />

      <div
        className="wedding-venue__artwork"
        aria-hidden="true"
      >
        <img
          src={venueImage}
          alt=""
          className="wedding-venue__artwork-image"
        />

        <div className="wedding-venue__artwork-fade" />
      </div>

      <div className="wedding-venue__layout">
        <div className="wedding-venue__content reveal reveal-left">
          <p className="wedding-venue__eyebrow">
            The celebration location
          </p>

          <h2>Wedding Venue</h2>

          <div className="wedding-venue__divider">
            <span />
            <b>❦</b>
            <span />
          </div>

          <h3>{venueName}</h3>

          <p className="wedding-venue__address">
            {venueAddress}
          </p>

          <p className="wedding-venue__description">
            Join us in an elegant setting filled with warmth,
            candlelight, music, and the people who mean the most
            to us.
          </p>

          <div className="wedding-venue__date">
            <span>{dayName}</span>

            <strong>{dateText}</strong>

           
          </div>

         
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="wedding-venue__map-button"
          >
            <span>Open in Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Venue;
