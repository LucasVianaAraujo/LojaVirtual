import Subtitulo from "../Subtitulo"
import CardProduto from "../CardProduto"

export default function Produtos() {
    return (
        <div id="Produtos" className="flex w-full flex-col items-center h-auto pb-10">

            <div className="flex w-[60%] justify-center">
                <Subtitulo titulo={'Produtos'} />
            </div>

            <div className="grid h-auto w-[60%]">
                <CardProduto 
                NomeProduto={'Nome do Produto'}
                CategoriaProduto={'Guitarra Elétrica'}
                PreçoProduto={'R$5000'}/>
            </div>
        </div>
    )
}