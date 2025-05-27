import S from './styles.module.css';

type ItemListaProps = {
    numero: number;
    texto: string;
};

export default function ItemLista({ numero, texto }: ItemListaProps) {
    return (
        <div className={S.itemLista}>
            <span>{numero}</span>
            <p>{texto}</p>
        </div>
    )
}