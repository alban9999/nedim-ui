import "./rsvp.css";

type RSVPProps = {
  firstName: string;
  secondName: string;
  dateText: string;
  ceremonyTime: string;
  phoneNumber: string;
};

export const RSVP = ({
  firstName,
  secondName,
  dateText,
  ceremonyTime,
  phoneNumber,
}: RSVPProps) => {
  const whatsappPhone = phoneNumber.replace(/\D/g, "");

  const viberPhone = phoneNumber.startsWith("+")
    ? phoneNumber
    : `+${phoneNumber.replace(/\D/g, "")}`;

  const confirmationMessage = encodeURIComponent(
    `Hello ${firstName} & ${secondName}, I would like to confirm my attendance for your wedding on ${dateText} at ${ceremonyTime}.`,
  );

  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${confirmationMessage}`;

  const viberUrl = `viber://chat?number=${encodeURIComponent(viberPhone)}`;

  return (
    <section id="rsvp" className="simple-rsvp">
      <div className="simple-rsvp__background-text" aria-hidden="true">
        RSVP
      </div>

      <div className="simple-rsvp__glow" aria-hidden="true" />

      <div className="simple-rsvp__content reveal">
        <p className="simple-rsvp__eyebrow">Kindly respond</p>

        <h2>Will You Join Us?</h2>

        <div className="simple-rsvp__decoration">
          <span />
          <b>❦</b>
          <span />
        </div>

        <p className="simple-rsvp__description">
          Your presence would make our celebration even more meaningful. Please
          confirm your attendance directly through WhatsApp or Viber.
        </p>

        <div className="simple-rsvp__date">
          <span>Please respond before</span>
          <strong>1 August 2026</strong>
        </div>

        <div className="simple-rsvp__buttons">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="simple-rsvp__button simple-rsvp__button--whatsapp"
          >
            <span>Confirm using WhatsApp</span>
          </a>

          <a
            href={viberUrl}
            className="simple-rsvp__button simple-rsvp__button--viber"
          >
            <span>Confirm using Viber</span>
          </a>
        </div>

        <p className="simple-rsvp__signature">
          With love,
          <strong>
            {firstName} &amp; {secondName}
          </strong>
        </p>
      </div>
    </section>
  );
};

export default RSVP;
