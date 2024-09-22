export default interface TourProps {
  pointerPosition: "top" | "bottom" | "left" | "right";
  message: string;
  open: boolean;
  hasOverlay?: boolean;
  actionLabel?: string;
  onActionClick: () => void;
  children?: React.ReactNode;
}
