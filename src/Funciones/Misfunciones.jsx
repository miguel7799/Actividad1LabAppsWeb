import { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function Misfunciones(params) {
  const [a, setA] = useState(params.a);
  const [visible, setVisible] = useState(false);

  function ChangeValue() {
    setVisible(!visible);
  }

  return {
    a,
    visible,
    Suma: () => {
      setA(a + 1);
    },
    MySimpleButton: (props) => {
      return (
        <div>
          <Button onClick={ChangeValue}>Esconder Letrero</Button>
        </div>
      );
    }
  };
}
