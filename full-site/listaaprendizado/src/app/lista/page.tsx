import S from "./styles.module.css";
import ItemLista from "../components/item-lista";

export default function ListaPage() {

  let aprendizados: string[] = [
    
  ]

  return (
    <div className={S.container}>
      <div className={S.screen}>
        <h1 className={S.titulo}>Lista de Aprendizado</h1>
        {aprendizados.map((aprendizado, index) => (
          <ItemLista
            key={index}
            numero={index + 1}
            texto={aprendizado}
          />
        ))}
      </div>
    </div>
  );
}
