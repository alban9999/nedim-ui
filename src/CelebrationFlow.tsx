import "./celebration-flow.css";

type CelebrationFlowProps = {
  firstName: string;
  secondName: string;
  dateText: string;
  ceremonyTime: string;
  venueName: string;
  venueAddress: string;
};

type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

const scheduleItems: ScheduleItem[] = [
  {
    time: "18:00",
    title: "Guest Arrival",
    description:
      "Welcome drinks, warm greetings, and the beginning of a beautiful evening.",
  },
  {
    time: "18:30",
    title: "Wedding Ceremony",
    description:
      "Join us as we exchange our promises and begin our forever together.",
  },
  {
    time: "20:00",
    title: "Dinner & Celebration",
    description:
      "An elegant dinner followed by music, dancing, laughter, and unforgettable memories.",
  },
  {
    time: "23:30",
    title: "Wedding Cake",
    description:
      "A sweet moment to celebrate our love and thank everyone for being part of our day.",
  },
];

export const CelebrationFlow = ({
  firstName,
  secondName,
  dateText,
  ceremonyTime,
  venueName,
  venueAddress,
}: CelebrationFlowProps) => {
  return (
    <div className="celebration-flow">
      <div
        className="celebration-flow__glow celebration-flow__glow--left"
        aria-hidden="true"
      />

      <div
        className="celebration-flow__glow celebration-flow__glow--right"
        aria-hidden="true"
      />

      <div
        className="celebration-flow__pattern"
        aria-hidden="true"
      />

      {/* Invitation */}

      <section
        id="invitation"
        className="celebration-invitation"
      >
        <div className="celebration-invitation__content reveal">
          <p className="celebration-invitation__eyebrow">
            The Wedding Celebration
          </p>

          <h2 className="celebration-invitation__title">
            Save <span>the</span> Date
          </h2>

          <p className="celebration-invitation__message">
            With joyful hearts, we invite you to share in our
            happiness as we unite in marriage and celebrate the
            beginning of our life together.
          </p>

          <div className="celebration-invitation__details">
            <div className="celebration-invitation__detail">
              <span className="celebration-invitation__label">
                When
              </span>

              <strong>{dateText}</strong>

              <p>Beginning at {ceremonyTime}</p>
            </div>

            <div
              className="celebration-invitation__middle"
              aria-hidden="true"
            >
              <span />
              <b>❦</b>
              <span />
            </div>

            <div className="celebration-invitation__detail">
              <span className="celebration-invitation__label">
                Where
              </span>

              <strong>{venueName}</strong>

              <p>{venueAddress}</p>
            </div>
          </div>

          <p className="celebration-invitation__signature">
            We cannot wait to celebrate with you
          </p>

          <div
            className="celebration-flow__divider"
            aria-hidden="true"
          >
            <span className="celebration-flow__divider-line" />

            <div className="celebration-flow__divider-monogram">
              <span>{firstName.charAt(0)}</span>
              <b>&amp;</b>
              <span>{secondName.charAt(0)}</span>
            </div>

            <span className="celebration-flow__divider-line celebration-flow__divider-line--right" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CelebrationFlow;

