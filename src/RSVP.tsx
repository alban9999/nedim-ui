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
    `Përshëndetje ${firstName} & ${secondName}, dëshiroj të konfirmoj pjesëmarrjen time në dasmën tuaj më ${dateText} në ora ${ceremonyTime}.`,
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
        <p className="simple-rsvp__eyebrow">Ju lutemi, konfirmoni pjesëmarrjen</p>

        <h2>Konfirmo pjesëmarrjen</h2>

        <div className="simple-rsvp__decoration" aria-hidden="true">
          <span />
          <b>❦</b>
          <span />
        </div>

        <p className="simple-rsvp__description">
          Prania juaj do ta bënte festën tonë edhe më të veçantë. Ju lutemi, konfirmoni pjesëmarrjen tuaj përmes WhatsApp ose Viber deri më{" "}
          <strong className="simple-rsvp__deadline">13 Gusht 2026</strong>.
        </p>

        <div className="simple-rsvp__buttons">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="simple-rsvp__button simple-rsvp__button--whatsapp"
            aria-label="Confirm attendance using WhatsApp"
          >
            <span>Konfirmo përmes WhatsApp</span>
          </a>

          <a
            href={viberUrl}
            className="simple-rsvp__button simple-rsvp__button--viber"
            aria-label="Confirm attendance using Viber"
          >
            <span>Konfirmo përmes Viber</span>
          </a>
        </div>

        <p className="simple-rsvp__signature">
          Me dashuri, <br />
          <strong>
            {firstName} &amp; {secondName}
          </strong>
        </p>
      </div>
    </section>
  );
};

export default RSVP;
