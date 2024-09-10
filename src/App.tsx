import "./index.css";
import { SomeComponent } from "./molecules/SomeComponent";

import { Tour } from "./molecules/Tour/Tour";

export default function App() {
  return (
    <Tour
      hasOverlay={true}
      message="¡Bienvenido! Esta es una introducción de tour, para continuar presione el botón Entendido."
      open={true}
      actionLabel="Entendido"
      onActionClick={() => console.log("onActionClick> Entendido")}
      pointerPosition="bottom"
    >
      <SomeComponent />
    </Tour>
  );
}
