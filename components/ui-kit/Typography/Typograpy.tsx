import { View } from "react-native";
import { TypographyText, TypographyContainer } from "./Typography.styles";
import type { TypographyProps } from "./Typograpy.types";

export const Typography = (props: TypographyProps): React.ReactNode => {
  return (
    <TypographyContainer {...props}>
      <TypographyText {...props}>{props.value}</TypographyText>
    </TypographyContainer>
  );
};
