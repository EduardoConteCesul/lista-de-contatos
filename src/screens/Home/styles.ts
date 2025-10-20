import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
`;

export const ListCards = styled.FlatList`
  padding: 20px
`;