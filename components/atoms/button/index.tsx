import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: Props) => (
  <button
    className="bg-blue-600 border-blue-600 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded"
    onClick={onClick}
  >
    {children}
  </button>
);
