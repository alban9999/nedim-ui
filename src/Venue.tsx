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
            Lokacioni i dasmës
          </p>

          <h2>{venueName}</h2>

          <div className="wedding-venue__divider">
            <span />
            <b>❦</b>
            <span />
          </div>

          <p className="wedding-venue__description">
            Dashuria jonë bëhet edhe më e bukur kur ndahet me njerëzit që duam. Ju ftojmë të jeni pranë nesh ndërsa fillojmë kapitullin më të bukur të jetës sonë.
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
            <span>Hapeni Lokacionin</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Venue;
