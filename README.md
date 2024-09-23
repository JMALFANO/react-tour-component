# React Onboarding Component 📚

Demo: https://react-tour-component.vercel.app/

This component allows you to wrap another component or JSX element to explain its use

¡¡This library needs React to work!!

## Installation 📦

```CMD
npm install react-onboarding-component
```

## Use 🎢

```jsx
import { Tour } from "react-onboarding-component";

<Tour
  hasOverlay={true}
  message="¡Bienvenido! Esta es una introducción de tour, para continuar presione el botón Entendido."
  open={true}
  actionLabel="Entendido"
  onActionClick={() => console.log("onActionClick> Entendido")}
  pointerPosition="bottom"
>
  <SomeComponent />
</Tour>;
```

| Properties              | Description                                   |
| ----------------------- | --------------------------------------------- |
| `hasOverlay(bool)`      | Cover the screen highlighting the component.  |
| `message(str)`          | Message to describe the use of the component. |
| `open(bool)`            | Initial state of the component.               |
| `actionLabel(str)`      | Text of the button to close the component.    |
| `onActionClick(fn)`     | Event propagated when component is closed.    |
| `pointerPosition(enum)` | Appears: "top" - "bottom" - "left" - "right"  |

---

Thanks for using this library! 🚀
