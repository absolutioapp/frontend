export enum ButtonTypes {
  "primary",
  "outlined",
}
export interface ButtonProps {
  text: string;

  handleClick: () => void;

  IconValue?: JSX.Element;

  buttonType: ButtonTypes;

  disabled?: boolean;
  isIcon?: boolean;
  loading?: boolean;

  customStyles?: string;

  customTextStyles?: string;
}
