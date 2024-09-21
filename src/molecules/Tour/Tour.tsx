"use client";
import React from "react";
import type TourProps from "./Tour.types";
import useTour from "./useTour";

const Tour: React.FC<TourProps> = (props: TourProps) => {
  const {
    hasOverlay = false,
    message,
    actionLabel,
    children,
    pointerPosition = "top",
  } = props;
  const { openTour, handleActionClick } = useTour(props);

  const getPointerPositionClasses = () => {
    switch (pointerPosition) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 -mb-4";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-4";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 -mr-4";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-4";
    }
  };

  return (
    <>
      {openTour ? (
        <div
          className={`${
            hasOverlay ? "bg-neutral-700 bg-opacity-75 fixed inset-0" : ""
          } flex items-center justify-center`}
        >
          <div className="relative">
            {children}
            <div
              className={`bg-neutral-200 rounded-lg border-2 w-64 absolute ${getPointerPositionClasses()}`}
            >
              <span className="font-semibold flex items-center p-4">
                {message}
              </span>
              <div className="flex justify-end p-4">
                <button
                  className="border rounded-md bg-neutral-700 text-white p-2"
                  onClick={handleActionClick}
                >
                  {actionLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Tour;
