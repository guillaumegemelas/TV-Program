const Program = ({ time, title, type, duration, image, isUnseen, direct }) => {
  return (
    <div className="global">
      <div className="time">
        <p>{time}</p>
      </div>

      <div className="picture">
        {/* <p>{image}</p> */}
        <img src={image} alt="images" />
      </div>

      <div className="col3">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <p>{type}</p>
        <div className="durationDirect">
          <div className="duration">
            <p>{duration}</p>
          </div>
          <div className="direct">
            <p>{direct && <span>Direct </span>}</p>
          </div>
          <div className="isUnseen">
            <p>{isUnseen && <span>Inédit </span>}</p>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Program;
