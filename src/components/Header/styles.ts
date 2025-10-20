import styled from "styled-components/native";

export const Container = styled.View`
  height: 180px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_800};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED_100};
  font-size: ${({ theme }) => theme.FONTS.FONT_SIZE_TITLE};
`;