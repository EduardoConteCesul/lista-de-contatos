import { Container, Title } from "./styles";

type HeaderProps = {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}