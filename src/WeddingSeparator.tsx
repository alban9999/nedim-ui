import "./wedding-separator.css";

const separatorItems = [
  "24 August 2026",
  "Together With Our Families",
  "Dinner · Music · Celebration",
  "We Cannot Wait to Celebrate With You",
];

export const WeddingSeparator = () => {
  const renderItems = (groupName: string) =>
    separatorItems.map((item, index) => (
      <div
        className="wedding-separator__item"
        key={`${groupName}-${item}-${index}`}
      >
        <span>{item}</span>
        <b aria-hidden="true">❦</b>
      </div>
    ));

  return (
    <section
      className="wedding-separator"
      aria-label="Wedding information"
    >
      <div className="wedding-separator__border wedding-separator__border--top" />

      <div className="wedding-separator__marquee">
        <div className="wedding-separator__track">
          <div className="wedding-separator__group">
            {renderItems("first")}
          </div>

          <div
            className="wedding-separator__group"
            aria-hidden="true"
          >
            {renderItems("second")}
          </div>
        </div>
      </div>

      <div className="wedding-separator__border wedding-separator__border--bottom" />
    </section>
  );
};

export default WeddingSeparator;