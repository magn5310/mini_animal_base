import { useState } from "react";
import { getData } from "./data";
import "./App.css";
console.log(getData());

function App() {
  const animals = getData();
  const [filterProperty, setFilterProperty] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  let filtered = animals;
  if (filterProperty) {
    filtered = animals.filter((ani) => ani.species === filterProperty);
  }

  function sortAnimals(a, b) {
    if (a[sortColumn] > b[sortColumn]) {
      return 1;
    } else {
      return -1;
    }
  }
  filtered.sort(sortAnimals);
  if (sortDirection === "desc") {
    filtered.reverse();
  }
  return (
    <>
      <button onClick={() => setFilterProperty("dog")}>Dogs</button>
      <button onClick={() => setFilterProperty("cat")}>Cats</button>
      <button onClick={() => setFilterProperty("horse")}>Horses</button>
      <button onClick={() => setFilterProperty("dragon")}>Dragons</button>

      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => setSortColumn("name")}>Name</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("trait")}>Trait</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("species")}>Species</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("age")}>Age</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ani) => (
            <tr>
              <td>{ani.name}</td>
              <td>{ani.trait}</td>
              <td>{ani.species}</td>
              <td>{ani.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
