const Workcomponents = ({
  imgSrc,
  title,
  text,
  githublink,
  livelink,
  // Writtenwith,
}) => {
  return (
    <div className="Work-container">
      <img src={imgSrc} alt="picturework" />
      <h2>{title}</h2>
      <p>{text}</p>
      {/* <p>{Writtenwith}</p> */}
      <div className="btns-work-container">
        <a href={githublink} target="_blank" className="btn btn-work">
          Link to repo
        </a>

        <a href={livelink} target="_blank" className="btn btn-work">
          Link to live repo
        </a>
      </div>
    </div>
  );
};

export default Workcomponents;
