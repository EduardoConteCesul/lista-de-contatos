import { Container, Content, Description, Person, Title } from "./styles";

type CardContactProps = {
  title: string;
  descrition: string
}

export function CardContact({ title, descrition }: CardContactProps) {
  return (
    <Container>
      <Person />
      <Content>
        <Title>{title}</Title>
        <Description>{descrition}</Description>
      </Content>
    </Container>
  )
}