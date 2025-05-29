import { View, Text, StyleSheet } from 'react-native';


type ItemListaProps = {
  aprendizado: string;
  numero: number;
}

export default function ItemLista({ aprendizado, numero }: ItemListaProps) {
  return (
    <View style={styles.itemLista}>
      <View style={styles.marcador}><Text style={styles.numerador}>{numero}</Text></View>
      <Text style={styles.textoAprendizado}>{aprendizado}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  itemLista: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    backgroundColor: "#fff",
  },

  marcador: {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#279257",
  },
  numerador: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#000",
  },
  textoAprendizado: {
    fontSize: 22,
    color: "#000",
  }


});