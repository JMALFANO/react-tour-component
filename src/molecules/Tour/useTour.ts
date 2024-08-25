import React, { useEffect } from "react";

import { TourProps } from "./Tour.types";

interface UseTourProps {
  openTour: boolean;
  handleActionClick: () => void;
}

export const useTour = (props: TourProps): UseTourProps => {
  const { open, onActionClick } = props;

  useEffect(() => {
    setOpenTour(open);
  }, [open]);

  const [openTour, setOpenTour] = React.useState(open);

  const handleActionClick = () => {
    setOpenTour(false);
    onActionClick();
  };

  return {
    openTour,
    handleActionClick,
  };
};
