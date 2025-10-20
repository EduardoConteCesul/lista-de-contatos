import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  border-width: 5px;
  border-color: ${({ theme }) => theme.COLORS.RED_900};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.RED_400};
  height: 100px;
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

export const Person = styled.View`
  border-width: 2px;
  border-radius: 99px;
  height: 50px;
  width: 50px;
  margin-left: 30px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-left: 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED_100};
  font-size: ${({ theme }) => theme.FONTS.FONT_SIZE_NAME};

`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED_200};
  font-size: ${({ theme }) => theme.FONTS.FONT_SIZE_NUMBER};
  
`;

