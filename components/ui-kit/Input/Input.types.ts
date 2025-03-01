export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;

  placeholder?: string;

  label?: string;

  secureTextEntry?: boolean;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";

  customStyles?: string;
  customTextStyles?: string;
}
