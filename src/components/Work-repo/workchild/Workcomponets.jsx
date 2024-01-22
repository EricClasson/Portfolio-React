const Workcomponents = ({
  imgSrc,
  title,
  text,
  githublink,
  livelink,
  Writtenwith,
}) => {
  return (
    <div className="Work-container">
      <img src={imgSrc} alt="picturework" />
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="work-writtenwith-content">
        {Writtenwith.map((ei, index) => (
          <h3 key={index}>{ei}</h3>
        ))}
      </div>

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
