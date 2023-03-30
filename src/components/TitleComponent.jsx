import "./card.css";

function TitleComponent(props) {
  return (
    <div className="carta">
      <h2>{props.name}</h2>
      <p>{props.story !== undefined ? props.story : "No tiene historia"} </p>

      <strong>Edad:{props.age}</strong>
    </div>
  );
}

export default TitleComponent;
