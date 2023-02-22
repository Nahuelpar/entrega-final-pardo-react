import "./App.css";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";

const frutas = ["Sahumerios", "Piedras", "Estatuillas", "Cuadritos"];

const App = () => {
  const handleClick = () => {
    alert("Click me!");
  };

  return (
    <div>
      <Navbar />
      <h1>OM SHOP</h1>
      <List frutas={frutas} />
      <Button txtBtn="Contacto" handleClick={handleClick} />
      <Button txtBtn="Productos" handleClick={handleClick} />
      <Button txtBtn="Nuestra historia" handleClick={handleClick} />
    </div>
  );
};

export default App;