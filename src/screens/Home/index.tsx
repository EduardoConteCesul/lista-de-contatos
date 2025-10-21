import { FlatList } from "react-native";
import { CardContact } from "../../components/CardContact";
import { Header } from "../../components/Header";
import { ListEmpty } from "../../components/ListEmpty";
import { Container } from "./styles";

type Props = {
  name: string;
  number: string;
}

const DATA: Props[] = [
  {
    name: "Eduardo",
    number: "(46) 9 9900-8811"
  },
  {
    name: "Conte",
    number: "(46) 9 9988-7766"
  },
  {
    name: "Mãe",
    number: "(46) 9 5544-3322"
  },
  {
    name: "Pai",
    number: "(46) 9 1100-9988"
  }
  ,
  {
    name: "Conte",
    number: "(46) 9 9988-7766"
  },
  {
    name: "Mãe",
    number: "(46) 9 5544-3322"
  },
  {
    name: "Pai",
    number: "(46) 9 1100-9988"
  }
]

export function Home() {
  return (
    <Container>
      <Header title="Trabalho Eduardo Conte" />

      <FlatList
        centerContent
        data={DATA}
        renderItem={({ item }) => (
          <CardContact
            title={item.name}
            descrition={item.number}
          />
        )}
        ListEmptyComponent={() => <ListEmpty title="ERRO" descrition="Nenhum contato cadastrado"/>}
        contentContainerStyle={DATA.length == 0 && {flex: 1}}
      />
    </Container>
  )
}