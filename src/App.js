import "./styles.css";
import SimpleButton from "./Componentes/MyButton";
import { useState } from "react";
import Misfunciones from "./Funciones/Misfunciones";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function App() {
  // Crear una suma

  const [data, setData] = useState([
    { id: 0, nombre: "Ruben", apellido: "perez", visible: false }
  ]);

  function deleteName(params) {
    setData(data.filter((i) => i.id !== params));
  }

  const { a, visible, Suma, MySimpleButton } = Misfunciones({
    a: 1,
    b: 22
  });

  return (
    <div className="App">
      {data.map((a) => (
        <div hidden={a.visible}>
          <Alert
            severity="success"
            onClick={() => {
              deleteName(a.id);
            }}
          >
            {a.id} {a.nombre}
          </Alert>
        </div>
      ))}
      <Button
        onClick={() => {
          setData((data) => [
            ...data,
            {
              id: data.length,
              nombre: "Sergio",
              apellido: "perez",
              visible: false
            }
          ]);
        }}
      >
        Agregar datos
      </Button>
      <MySimpleButton />
    </div>
  );
}
