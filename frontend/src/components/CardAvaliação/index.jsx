import { BiSolidLike } from "react-icons/bi";

export default function CardAvaliacao({ NomeCliente, Avaliacão }) {
    return (
        <div className="flex rounded-md p-5 shadow-2xl shadow-black/40 flex-col w-[full] h-40">

            <div className="flex w-full flex-col">
                <div className="flex items-center gap-2">
                    <h1 className="font-medium  text-2xl">{NomeCliente ? NomeCliente : 'Não Identificado'}</h1>
                    <h1 className="text-2xl text-blue-700"><BiSolidLike /></h1>
                </div>

                <h3 className="font-medium text-blue-700">Acabou de Comprar</h3>

                <h4 className="font-medium">{Avaliacão ? Avaliacão : 'Nada a compartilhar'}</h4>
            </div >
        </div>
    )
}