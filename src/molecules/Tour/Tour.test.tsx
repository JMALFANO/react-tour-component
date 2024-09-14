import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tour } from "./Tour";

describe("Tour", () => {
  // Objetivo: Testear que el componente se renderice correctamente
  it("should render successfully", () => {
    const { baseElement } = render(
      <Tour
        hasOverlay={true}
        message="¡Bienvenido! Esta es una introducción de tour, para continuar presione el botón Entendido."
        open={true}
        actionLabel="Entendido"
        onActionClick={() => { }}
        pointerPosition="bottom"
      />,
    );

    expect(baseElement).toBeTruthy();
  });

  // Objetivo: verificar que el overlay no se muestra cuando hasOverlay es false
  it("should not display overlay when hasOverlay is false", () => {
    const { container } = render(
      <Tour
        hasOverlay={false}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={() => { }}
        pointerPosition="bottom"
      />,
    );

    const overlay = container.querySelector(".bg-black.bg-opacity-75");
    expect(overlay).toBeNull();
  });

  // Objetivo: verificar que onActionClick se ejecuta correctamente al hacer clic en el botón de acción
  it("should call onActionClick when action button is clicked", () => {
    const mockActionClick = vi.fn();

    render(
      <Tour
        hasOverlay={true}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={mockActionClick}
        pointerPosition="bottom"
      />,
    );

    const actionButton = screen.getByText("Entendido");
    fireEvent.click(actionButton);

    expect(mockActionClick).toHaveBeenCalledTimes(1);
  });

  // // Objetivo: verificar que el pointerPosition cambia las clases adecuadamente para "bottom"
  // it("should apply correct classes for pointerPosition 'bottom'", () => {
  //   const { container } = render(
  //     <Tour
  //       hasOverlay={false}
  //       message="¡Bienvenido!"
  //       open={true}
  //       actionLabel="Entendido"
  //       onActionClick={() => { }}
  //       pointerPosition="bottom"
  //     />,
  //   );
  //
  //   const tooltip = container.querySelector(".absolute");
  //   expect(tooltip).toHaveClass("top-full left-1/2");
  // });
});
