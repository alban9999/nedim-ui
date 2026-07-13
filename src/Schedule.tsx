import {
  type CSSProperties,
} from "react";
import "./schedule.css";

type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

type DelayStyle = CSSProperties & {
  "--schedule-delay": string;
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

const getScheduleDelay = (index: number): DelayStyle => ({
  "--schedule-delay": `${index * 0.12}s`,
});

export const Schedule = () => {
  return (
    <section
      id="schedule"
      className="wedding-schedule section"
    >
      <div
        className="wedding-schedule__glow wedding-schedule__glow--one"
        aria-hidden="true"
      />

      <div
        className="wedding-schedule__glow wedding-schedule__glow--two"
        aria-hidden="true"
      />

      <div
        className="wedding-schedule__pattern"
        aria-hidden="true"
      />

      <div className="wedding-schedule__container">
        <div className="wedding-schedule__heading reveal">
          <p className="wedding-schedule__eyebrow">
            Celebrate with us
          </p>

          <h2>Wedding Schedule</h2>

          <div className="wedding-schedule__decoration">
            <span />
            <b>✦</b>
            <span />
          </div>

          <p className="wedding-schedule__description">
            Every part of our celebration has been planned with
            love. We look forward to sharing each special moment
            with you.
          </p>
        </div>

        <div className="wedding-schedule__timeline">
          {scheduleItems.map((item, index) => (
            <article
              className="wedding-schedule__item reveal"
              style={getScheduleDelay(index)}
              key={`${item.time}-${item.title}`}
            >
              <div className="wedding-schedule__time">
                <span>{item.time}</span>
              </div>

              <div className="wedding-schedule__marker">
                <i />
              </div>

              <div className="wedding-schedule__card">
                <span className="wedding-schedule__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="wedding-schedule__step">
                  Wedding moment
                </p>

                <h3>{item.title}</h3>

                <p className="wedding-schedule__copy">
                  {item.description}
                </p>

                <div className="wedding-schedule__card-line" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;