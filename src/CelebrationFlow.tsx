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
            Celebrimi i dasmës
          </p>

          <h2 className="celebration-invitation__title">
            Ruajeni <span>këtë</span> datë
          </h2>

          <p className="celebration-invitation__message">
            Kjo datë e veçantë shënon fillimin e rrugëtimit tonë së bashku.
Një kapitull i ri, i mbushur me dashuri, lumturi dhe kujtime të paharrueshme.
          </p>

          <div className="celebration-invitation__details">
            <div className="celebration-invitation__detail">
              <span className="celebration-invitation__label">
                Data
              </span>

              <strong>{dateText}</strong>

              <p>Duke filluar nga ora {ceremonyTime}</p>
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
                Lokacjoni
              </span>

              <strong>{venueName}</strong>

              <p>{venueAddress}</p>
            </div>
          </div>

          <p className="celebration-invitation__signature">
            Mezi presim të festojmë së bashku me ju.
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

