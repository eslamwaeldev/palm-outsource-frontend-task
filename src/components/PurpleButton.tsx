import type { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from "react";
import { useNavigate } from "react-router";

export interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  isNavigator?: boolean;
  to?: string;
  className?: string;
}

const PurpleButton = ({
  isNavigator = false,
  to = "#",
  children,
  className = "",
  onClick = () => false,
}: Props) => {
  const navigate = useNavigate();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick(event);
    if (isNavigator) {
      navigate(to);
    }
  };
  return (
    <button
      className={`rounded-xl text-white max-w-fit bg-palm-purple px-5 py-4 font-medium cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default PurpleButton;
