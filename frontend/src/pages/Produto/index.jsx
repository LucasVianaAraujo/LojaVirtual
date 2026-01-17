import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Subtitulo from "../../components/Subtitulo"
import CardProduto from "../../components/CardProduto"

export default function Produto({ NomeProduto, CategoriaProduto, DescricaoProduto }) {
    return (
        <div className="flex flex-col">
            <Header />

            <div className="flex flex-row w-[60%] h-[55vh] gap-5 self-center mt-25">
                <div className="flex w-[50%] pt-10">

                    <div className="flex w-full h-full gap-3 flex-col">

                        <div className="bg-gray-500 w-full h-[70%]" />

                        <div className="flex flex-row h-[30%] gap-2">
                            <div className="flex bg-gray-500 w-[33.3%] h-full">
                            </div>

                            <div className="flex bg-gray-500 w-[33.3%] h-full">
                            </div>

                            <div className="flex bg-gray-500 w-[33.3%] h-full">
                            </div>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col w-[50%] h-full pt-10">
                    <div className="flex h-[80%] w-full flex-col">
                        <h1 className="flex font-medium text-4xl">{NomeProduto ? NomeProduto : 'Não Intitulado'}</h1>
                        <h2 className="text-gray-700 text-2xl font-medium">{CategoriaProduto ? CategoriaProduto : 'Sem Categoria'}</h2>
                        <h3 className="text-2xl">{DescricaoProduto ? DescricaoProduto : 'Sem Descrição'}</h3>
                        <h3 className="text-blue-700 font-bold text-3xl">R$3000</h3>
                        <h2 className="font-medium text-xl">10x de R$300,00 sem juros</h2>
                    </div>
                    <div className="flex h-[20%] w-full items-end">
                        <button className="bg-blue-700 w-full cursor-pointer text-xl font-medium text-white h-15 rounded-md mt-5">COMPRAR</button>
                    </div>
                </div>

            </div>

            <div className="flex flex-col w-[60%] self-center mt-10">
                <Subtitulo titulo={'Produtos Similares'} />

                <div className="flex gap-2 flex-row">
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                </div>

            </div>

            <Footer />
        </div>
    )
}