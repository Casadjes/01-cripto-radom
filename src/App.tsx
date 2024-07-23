import { useEffect, useState } from "react";
import "./App.css";
//
function App() {
  const [number, setnumber] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    )
      .then((resp) => resp.json())
      .then((data) => setnumber(data));
    setisLoading(false);
  }, []);

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <h1>Numero: {number}</h1>}
      <div>...</div>
      <button>Nuevo Numero</button>
    </>
  );
}

export default App;
