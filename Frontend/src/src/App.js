import React, { useEffect, useState } from "react";

function App() {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/vegetables")
      .then((res) => res.json())
      .then((data) => setVegetables(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🥕 Vegetable Store</h1>
      {vegetables.map((veg) => (
        <div key={veg.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h2>{veg.name}</h2>
          <p>Price: ₹{veg.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
