import Pet from "./Pet";
import Timer from "./Timer";

function App() {
  const pets = [
    { name: "Fluffy", species: "bird", age: "six", id: 345211 },
    { name: "Cisco", species: "cat", age: "sixteen", id: 345212 },
    { name: "Tyson", species: "dog", age: "two", id: 345213 },
    { name: "Mewao", species: "cat", age: "six", id: 345214 },
    { name: "Nimo", species: "fish", age: "eight", id: 345215 },
  ];
  return (
    <div className="App">
      <h1 style={{ color: "orange", fontSize: "35px" }}>
        Welcome to our amazing pet shop
      </h1>
      <Timer />
      <ul>
        {pets.map((pet) => (
          <Pet
            name={pet.name}
            species={pet.species}
            age={pet.age}
            key={pet.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

// 1. Pet directory
// 2. Add new pet to pet directory(forms)
// 3. Events
// 4. State manage (useState hook)
// 5. Time and Date Functionality (useEffect hook)
