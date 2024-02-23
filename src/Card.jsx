import propTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img className="profile" src={props.img} alt="Profile Picture" />
        <div className="bottom-card">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <button className="add-btn">Hire</button>
          <button className="remove-btn">Remove</button>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: propTypes.string,
  img: propTypes.string,
  desc: propTypes.string,
};

Card.defaultProps = {
  title: "Card title",
  img: "#",
  desc: "Describe your card here",
};

export default Card;
