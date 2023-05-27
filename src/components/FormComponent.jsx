import { useState } from "react";
import "./form.css";
import { useEffect } from "react";
import PersonComoponent from "./PersonComponent";

function FormComponent() {
  const [personas, setPersonas] = useState([
    { name: "pepito", age: 12, story: "Es muy juicioso" },
    { name: "juanito", age: 14, story: undefined },
    { name: "sutanito", age: 25, story: undefined },
    { name: "El mago", age: 23, story: "Lo volvio a hacer" },
  ]);

  const [name, setName] = useState("sergio");
  const [age, setAge] = useState(0);
  const [story, setStory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const auxiliar = personas;
    auxiliar.push({ name, age, story });
    setPersonas([...auxiliar]);
  };

  const handleChange = (message, condition) => {
    const mensaje = message;
    if (condition) {
      const searchError = error.includes(mensaje);
      if (!searchError) {
        if (error.length !== 0) {
          setError(error + `/ ${mensaje}`);
        } else {
          setError(mensaje);
        }
      }
    } else {
      if (error.length !== 0) {
        setError("");
      }
    }
  };

  useEffect(() => {
    handleChange(
      "el nombre debe contener al menos 5 caracteres",
      name.length < 3
    );
  }, [name]);

  useEffect(() => {
    handleChange("Edad invalida", age > 130 || age < 0);
  }, [age]);

  useEffect(() => {
    handleChange(
      "la historia debe contener mas de 5 caracteres",
      story.length < 5
    );
  }, [story]);

  return (
    <>
      <div className="formulario">
        <h2 className="title">Formulario</h2>
        <article>
          <label htmlFor="name-input">Nombre:</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </article>
        <article>
          <label htmlFor="age-input">Edad:</label>
          <input
            type="number"
            id="age-input"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </article>
        <article>
          <label htmlFor="story-input">Historia:</label>
          <input
            type="text"
            id="story-input"
            value={story}
            onChange={(e) => {
              setStory(e.target.value);
            }}
          />
        </article>
        <p id="error">{error}</p>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
      {personas.map((persona) => (
        <PersonComoponent
          name={persona.name}
          story={persona.story}
          age={persona.age}
        />
      ))}
    </>
  );
}

export default FormComponent;
