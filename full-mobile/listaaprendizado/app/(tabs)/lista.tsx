import { View, Text, StyleSheet } from 'react-native';
import ItemLista from '@/components/ItemLista';


export default function AprendizadoPage() {

  let aprendizados: string[] = [
    
  ]

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.titulo}>Lista de aprendizado</Text>
        {aprendizados.map((aprendizado, index) => (
          <ItemLista
            key={index}
            numero={index + 1}
            aprendizado={aprendizado}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
  screen: {
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    gap: 15,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  titulo: {
    width: "100%",
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  }

});