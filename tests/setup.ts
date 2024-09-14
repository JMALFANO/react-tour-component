import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  vi.useFakeTimers();
});
