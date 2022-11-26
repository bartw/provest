import { ReactNode } from "react";

type SharedProps = {
  disabled?: boolean;
  children: ReactNode;
};

type TypeProps =
  | {
      type: "button";
      onClick: () => void;
    }
  | {
      type: "submit";
    };

type Props = TypeProps & SharedProps;

export const Button = (props: Props) => (
  <button
    type={props.type}
    className="bg-blue-600 border-blue-600 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded"
    onClick={props.type === "button" ? props.onClick : undefined}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);
