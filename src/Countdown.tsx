import { useEffect, useState } from "react";
import "./countdown.css";

type CountdownProps = {
  targetDate: Date;
};

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const padNumber = (value: number): string =>
  String(value).padStart(2, "0");

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  return {
    days: padNumber(
      Math.floor(difference / (1000 * 60 * 60 * 24)),
    ),
    hours: padNumber(
      Math.floor((difference / (1000 * 60 * 60)) % 24),
    ),
    minutes: padNumber(
      Math.floor((difference / (1000 * 60)) % 60),
    ),
    seconds: padNumber(
      Math.floor((difference / 1000) % 60),
    ),
  };
};

export const Countdown = ({
  targetDate,
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const updateCountdown = (): void => {
      setTimeLeft(calculateTimeLeft(targetDate));
    };

    updateCountdown();

    const interval = window.setInterval(
      updateCountdown,
      1000,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <section
      className="countdown-section"
      aria-labelledby="countdown-title"
    >
      <div
        className="countdown-overlay"
        aria-hidden="true"
      />

      <div className="countdown-content reveal">
        <p>Numërimi mbrapsht</p>

        <h2 id="countdown-title">
          Deri në ditën tonë të veçantë
        </h2>

        <div
          className="countdown-grid"
          aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes and ${timeLeft.seconds} seconds remaining`}
        >
          <div className="countdown-item">
            <strong>{timeLeft.days}</strong>
            <span>Ditë</span>
          </div>

          <i aria-hidden="true" />

          <div className="countdown-item">
            <strong>{timeLeft.hours}</strong>
            <span>Orë</span>
          </div>

          <i aria-hidden="true" />

          <div className="countdown-item">
            <strong>{timeLeft.minutes}</strong>
            <span>Minuta</span>
          </div>

          <i aria-hidden="true" />

          <div className="countdown-item">
            <strong>{timeLeft.seconds}</strong>
            <span>Sekonda</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;