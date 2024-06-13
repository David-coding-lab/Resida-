import officeImg from "../assets/need an office img.png";
const NeedAnOfficeSpace = () => {
  return (
    <div className="need_an_office_section">
      <div className="office_space_img_container">
        <img src={officeImg} alt="office" />
      </div>
      <div className="office_space_txt_container">
        <h1>Need an office space?</h1>
        <article>
          Seeking office space in Lagos? Look no further! Our accommodations
          offer tailored solutions to meet your workspace needs, ensuring
          productivity and comfort in the heart of Lagos
        </article>
      </div>
    </div>
  );
};
export default NeedAnOfficeSpace;
