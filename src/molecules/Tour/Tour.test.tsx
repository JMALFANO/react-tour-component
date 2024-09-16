import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom"; // Importa jest-dom para las aserciones adicionales
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
        onActionClick={() => {}}
        pointerPosition="bottom"
      />
    );

    expect(baseElement).toBeTruthy();
  });

  // Objetivo: verificar que el mensaje se renderiza correctamente
  it("should render the message correctly", () => {
    render(
      <Tour
        hasOverlay={true}
        message="¡Bienvenido! Esta es una introducción de tour."
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="bottom"
      />
    );

    const messageElement = screen.getByText(
      "¡Bienvenido! Esta es una introducción de tour."
    );
    expect(messageElement).toBeInTheDocument();
  });

  // Objetivo: verificar que el botón de acción se renderiza con el label correcto
  it("should render the action button with correct label", () => {
    render(
      <Tour
        hasOverlay={true}
        message="¡Bienvenido! Esta es una introducción de tour."
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="bottom"
      />
    );

    const actionButton = screen.getByText("Entendido");
    expect(actionButton).toBeInTheDocument();
  });

  // Objetivo: verificar que el overlay se muestra cuando hasOverlay es true
  it("should display overlay when hasOverlay is true", () => {
    const { container } = render(
      <Tour
        hasOverlay={true}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="bottom"
      />
    );

    const overlay = container.querySelector(".bg-black.bg-opacity-75");
    expect(overlay).toBeTruthy();
  });

  // Objetivo: verificar que el overlay no se muestra cuando hasOverlay es false
  it("should not display overlay when hasOverlay is false", () => {
    const { container } = render(
      <Tour
        hasOverlay={false}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="bottom"
      />
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
      />
    );

    const actionButton = screen.getByText("Entendido");
    fireEvent.click(actionButton);

    expect(mockActionClick).toHaveBeenCalledTimes(1);
  });

  // Objetivo: verificar que el pointerPosition cambia las clases adecuadamente para "bottom"
  it("should apply correct classes for pointerPosition 'bottom'", () => {
    const { container } = render(
      <Tour
        hasOverlay={false}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="bottom"
      />
    );

    const tooltip = container.querySelector(".absolute");
    expect(tooltip).toHaveClass("top-full left-1/2");
  });

  // Objetivo: verificar que el pointerPosition cambia las clases adecuadamente para "left"
  it("should apply correct classes for pointerPosition 'left'", () => {
    const { container } = render(
      <Tour
        hasOverlay={false}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="left"
      />
    );

    const tooltip = container.querySelector(".absolute");
    expect(tooltip).toHaveClass("right-full top-1/2");
  });

  // Objetivo: verificar que el pointerPosition cambia las clases adecuadamente para "right"
  it("should apply correct classes for pointerPosition 'right'", () => {
    const { container } = render(
      <Tour
        hasOverlay={false}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="right"
      />
    );

    const tooltip = container.querySelector(".absolute");
    expect(tooltip).toHaveClass("left-full top-1/2");
  });

  // Objetivo: verificar que el pointerPosition cambia las clases adecuadamente para "top"
  it("should apply correct classes for pointerPosition 'top'", () => {
    const { container } = render(
      <Tour
        hasOverlay={false}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="top"
      />
    );

    const tooltip = container.querySelector(".absolute");
    expect(tooltip).toHaveClass("bottom-full left-1/2");
  });

  // Objetivo: verificar que el componente no se renderiza cuando open es false
  it("should not render when open is false", () => {
    const { container } = render(
      <Tour
        hasOverlay={true}
        message="¡Bienvenido!"
        open={false}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="bottom"
      />
    );

    expect(container.firstChild).toBeNull();
  });

  // Objetivo: verificar que el componente se renderiza cuando open es true
  it("should render when open is true", () => {
    const { container } = render(
      <Tour
        hasOverlay={true}
        message="¡Bienvenido!"
        open={true}
        actionLabel="Entendido"
        onActionClick={() => {}}
        pointerPosition="bottom"
      />
    );

    expect(container.firstChild).not.toBeNull();
  });
});
