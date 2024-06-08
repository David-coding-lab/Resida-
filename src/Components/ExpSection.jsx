import expImg from "../assets/exp_img.png";
const ExpSection = () => {
  return (
    <section className="exp_section">
      <section className="exp_section_left">
        <img src={expImg} alt="exp details" />
      </section>
      <section className="exp_section_right">
        <h1>Resida is Not Just an App</h1>
        <h3>We are an ecosystem with you in the center</h3>
        <article>
          Resida aims to bridge the gap between potential tenants and available
          properties. This app is not just a tool; it's a solution for
          individuals and families who are navigating the challenging terrain of
          apartment hunting in a new or familiar city.
        </article>
      </section>
    </section>
  );
};
export default ExpSection;
