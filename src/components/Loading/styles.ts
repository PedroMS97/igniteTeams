import styled from "styled-components/native";
import theme from "@theme/index";


export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs({color: theme.COLORS.GREEN_700})``;