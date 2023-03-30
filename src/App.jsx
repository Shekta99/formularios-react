import TitleComponent from "./components/TitleComponent";

function App() {
  const personas = [
    { name: "pepito", age: 12, story: "Es muy juicioso" },
    { name: "juanito", age: 14, story: undefined },
    { name: "sutanito", age: 25, story: undefined },
    { name: "Al mago", age: 23, story: "Lo volvio a hacer" },
  ];

  return (
    <div className="App">
      {personas.map((persona) => (
        <TitleComponent
          name={persona.name}
          story={persona.story}
          age={persona.age}
        />
      ))}
    </div>
  );
}

export default App;
