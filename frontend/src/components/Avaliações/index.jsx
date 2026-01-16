import Subtitulo from "../Subtitulo"
import CardAvaliacao from "../CardAvaliação";

export default function Avaliacoes({ NomeCliente, SeGostou, Avaliacão }) {
    return (
        <div id="Avaliacoes" className="flex flex-col w-full justify-center items-center">
            <div className="flex w-[60%] justify-center">
                <Subtitulo titulo={'Avaliações'} />
            </div>
            <div className="grid gap-5 grid-cols-2 w-[60%] justify-center h-auto">


                <CardAvaliacao NomeCliente={'Gustavo Henrique'} Avaliacão={'Ótimo Produto!'} />

                <CardAvaliacao NomeCliente={'Lucas Viana'} Avaliacão={'Ótimo Produto!'} />

                <CardAvaliacao NomeCliente={'Rafael Campos'} Avaliacão={'Ótimo Produto!'} />

                <CardAvaliacao NomeCliente={'Matheus Santos'} Avaliacão={'Ótimo Produto!'} />

            </div>

        </div >
    )
}