import React, { useEffect } from "react";

import type TourProps from "./Tour.types";

interface UseTourProps {
  openTour: boolean;
  handleActionClick: () => void;
}

const useTour = (props: TourProps): UseTourProps => {
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

export default useTour;
