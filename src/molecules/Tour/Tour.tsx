import React from "react";
import { TourProps } from "./Tour.types";
import { useTour } from "./useTour";
export const Tour: React.FC<TourProps> = (props: TourProps) => {
  const { hasOverlay = false, message, actionLabel, children } = props;
  const { openTour, handleActionClick } = useTour(props);

  return (
    <>
      {openTour ? (
        <div
          className={`${hasOverlay && "bg-black bg-opacity-75"} overflow-hidden w-full h-full fixed`}
        >
          {children}
          <div className="bg-neutral-200 rounded-lg border-2 w-64">
            <span className="font-semibold flex items-center p-4">
              {message}
            </span>
            <div className="flex justify-end p-4">
              <button
                className="border rounded-md bg-black text-white p-2"
                onClick={handleActionClick}
              >
                {actionLabel}
              </button>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};
