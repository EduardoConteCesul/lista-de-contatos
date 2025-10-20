import { FlatList } from "react-native";
import { CardContact } from "../../components/CardContact";
import { Header } from "../../components/Header";
import { Container, ListCards } from "./styles";

const DATA = [
  {
    name: "Eduardo",
    number: "(46) 9 9900-8811"
  },
  {
    name: "Conte",
    number: "(46) 9 9988-7766"
  },
  {
    name: "Matheus",
    number: "(46) 9 5544-3322"
  },
  {
    name: "Conte",
    number: "(46) 9 1100-9988"
  }
]

export function Home() {
  return (
    <Container>
      <Header title="Trabalho Eduardo Conte" />

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <CardContact
            title={item.name}
            descrition={item.number}
          />
        )}
      />
    </Container>
  )
}