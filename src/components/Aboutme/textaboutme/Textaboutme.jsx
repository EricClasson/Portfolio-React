import mepicture from "../../../assets/eric.avif";

// Text about me
const Textaboutme = () => {
  return (
    <div className="textaboutme-container">
      <h3>ME...</h3>
      <div className="aboutme-text-content">
        <p>
          Hello! I'm Eric Classon, a passionate student on the journey to
          becoming a front-end developer. When I'm not immersed in the world of
          coding, you can find me exploring the great outdoors, particularly in
          the mountains, or enjoying quality time with my family and friends.
          Known for my creative approach to work, I am constantly seeking new
          opportunities to expand my knowledge and enhance my skills. Join me as
          I navigate the exciting path of web development and embrace the
          ever-evolving world of technology!
        </p>
        <img src={mepicture} alt="" />
      </div>
    </div>
  );
};

export default Textaboutme;
