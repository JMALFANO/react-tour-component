import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Tour from "./Tour";
import { SomeComponent } from "./../SomeComponent/SomeComponent";

const meta: Meta<typeof Tour> = {
  title: "molecules/Tour",
  component: Tour,
  parameters: {
    layout: "centered",
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
    pointerPosition: "bottom",
    children: <SomeComponent />,
  },
};
