import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Tour } from "./";
import { SomeComponent } from "../SomeComponent";

const meta: Meta<typeof Tour> = {
  title: "molecules/Tour",
  component: Tour,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onActionClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasOverlay: true,
    message:
      "¡Bienvenido! Esta es una introducción de tour, para continuar presione el botón Entendido.",
    open: true,
    actionLabel: "Entendido",
    pointerPosition: "top",
    children: <SomeComponent />,
  },
};
