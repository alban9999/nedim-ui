import {
  useEffect,
  useRef,
  useState,
} from "react";

import Landing from "./Landing";
import waxStamp from "./images/stamp-without-bg.png";
import "./styles.css";
import music from "./music/wedding-song.mp3";
import { CelebrationFlow } from "./CelebrationFlow";
import { RSVP } from "./RSVP";
import { Venue } from "./Venue";
import WeddingSeparator from "./WeddingSeparator";
import Countdown from "./Countdown";

const WEDDING = {
  firstName: "Nedim",
  secondName: "Arlinda",
  initials: "N & A",

  date: new Date(2026, 7, 24, 18, 0, 0),
  dayName: "E Enjte",
  dateText: "13 Gusht 2026",
  ceremonyTime: "19:00",

  venueName: "Ahengu & Sopi",
  venueAddress: "Tetovë, Maqedoni e Veriut",
  mapUrl:
    "https://maps.app.goo.gl/X8XGd3rpVhYTJWk27",

  songUrl: music,
};

export const Wedding = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [leavingEntry, setLeavingEntry] =
    useState(false);

  const [entered, setEntered] =
    useState(false);

  const [isPlaying, setIsPlaying] =
    useState(false);

  useEffect(() => {
    document.body.style.overflow = entered
      ? "auto"
      : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  useEffect(() => {
    if (!entered) {
      return;
    }

    const elements =
      document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            "reveal-visible",
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.13,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [entered]);

  const startMusic = async (): Promise<void> => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 0.20;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error(
        "The background music could not be played.",
        error,
      );

      setIsPlaying(false);
    }
  };

  const handleEnter = async (): Promise<void> => {
    await startMusic();
    setLeavingEntry(true);

    window.setTimeout(() => {
      setEntered(true);
    }, 700);
  };

  const toggleMusic = async (): Promise<void> => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      await startMusic();
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const scrollToSection = (
    sectionId: string,
  ): void => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const offset = 100;
    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <main className="wedding-page">
      <audio
        ref={audioRef}
        src={WEDDING.songUrl}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!entered && (
        <div
          className={`loading-screen ${
            leavingEntry
              ? "loading-leaving"
              : ""
          }`}
        >
          <button
            type="button"
            className="stamp-entry-button"
            onClick={handleEnter}
            disabled={leavingEntry}
            aria-label="Shtyp për të hapur ftesën"
          >
            <span className="stamp-entry-visual">
              <span className="stamp-glow" />

              <img
                src={waxStamp}
                alt="N and A wedding wax seal"
                className="stamp-entry-image"
              />
            </span>

            <span className="stamp-tap-text">
              Shtyp për të hapur ftesën
            </span>
          </button>
        </div>
      )}

      <Landing
        firstName={WEDDING.firstName}
        secondName={WEDDING.secondName}
        initials={WEDDING.initials}
        dayName={WEDDING.dayName}
        dateText={WEDDING.dateText}
        ceremonyTime={WEDDING.ceremonyTime}
        visible={entered}
        onViewInvitation={() => {
          scrollToSection("invitation");
        }}
      />

      <CelebrationFlow
        firstName={WEDDING.firstName}
        secondName={WEDDING.secondName}
        dateText={WEDDING.dateText}
        ceremonyTime={WEDDING.ceremonyTime}
        venueName={WEDDING.venueName}
        venueAddress={WEDDING.venueAddress}
      />

      <Countdown targetDate={WEDDING.date} />

      <Venue
        dayName={WEDDING.dayName}
        dateText={WEDDING.dateText}
        ceremonyTime={WEDDING.ceremonyTime}
        venueName={WEDDING.venueName}
        venueAddress={WEDDING.venueAddress}
        mapUrl={WEDDING.mapUrl}
      />

      <WeddingSeparator />

      <RSVP
        firstName={WEDDING.firstName}
        secondName={WEDDING.secondName}
        dateText={WEDDING.dateText}
        ceremonyTime={WEDDING.ceremonyTime}
        phoneNumber="+38976441599"
      />

      <footer className="wedding-footer">
        <div className="footer-flourish">
          ❦
        </div>

        <p>
          Pjesëmarrja juaj, gëzimi ynë.
        </p>

        <h2>
          {WEDDING.firstName}
          <span>&amp;</span>
          {WEDDING.secondName}
        </h2>

        <div className="footer-date">
          <span />
          <strong>{WEDDING.dateText}</strong>
          <span />
        </div>

        <small>
          Një natë e paharrueshme po na pret
        </small>
      </footer>

      {entered && (
        <button
          type="button"
          className={`music-button ${
            isPlaying
              ? "music-playing"
              : ""
          }`}
          onClick={toggleMusic}
          aria-label={
            isPlaying
              ? "Pause wedding music"
              : "Play wedding music"
          }
        >
          <span className="music-disc">
            <i>{WEDDING.initials}</i>
          </span>

          <span className="music-status">
            {isPlaying
              ? "Pause music"
              : "Play music"}
          </span>

          <span
            className="music-bars"
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
          </span>
        </button>
      )}
    </main>
  );
};

export default Wedding;
