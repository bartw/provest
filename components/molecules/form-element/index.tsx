import { ReactNode } from "react";

type Props = {
  label: ReactNode;
  children: ReactNode;
};

export const FormElement = ({ label, children }: Props) => (
  <label>
    {label}
    {children}
  </label>
);
