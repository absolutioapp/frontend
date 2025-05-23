interface AuthButtonProps {
  label: string;
  bgColor: string;
  icon: React.ReactNode;
  textColor: string;
  onPress: () => void;
  disabled?: boolean;
}

export default AuthButtonProps;
