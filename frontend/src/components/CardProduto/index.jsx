import { FaShoppingCart } from "react-icons/fa";

export default function CardProduto({ NomeProduto, CategoriaProduto, PreçoProduto }) {
    return (
        <div className="flex-[100%] h-auto">
            <div className="flex flex-col shadow-2xl shadow-black/40 rounded-md p-3 min-w-[20%] h-[30vh]">
                <div className="flex bg-gray-400 w-full h-[15vh] rounded-md" />
                <div className="pt-2 h-30">
                    <h3 className="font-medium">{NomeProduto ? NomeProduto : 'Não Intitulado'}</h3>
                    <div className="flex w-full flex-row">
                        <h2 className="flex text-blue-500 font-bold">{PreçoProduto ? PreçoProduto : 'Indefinido'}</h2>
                        <div className="flex w-full text-gray-500 font-medium justify-end">
                            <h2 className="flex">{CategoriaProduto ? CategoriaProduto : 'Sem Categoria'}</h2>
                        </div>
                    </div>
                    <button className="flex w-full mt-3 h-8 cursor-pointer gap-2 text-white items-center justify-center rounded-md bg-blue-600"><FaShoppingCart />Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}