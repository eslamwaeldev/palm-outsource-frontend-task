import type { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from "react";
import { useNavigate } from "react-router";

export interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  isNavigator?: boolean;
  to?: string;
  className?: string;
}

const BorderedButton = ({
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
      className={`rounded-xl border-[1px] max-w-fit  text-palm-purple border-palm-purple cursor-pointer px-5 py-4 font-medium ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default BorderedButton;
