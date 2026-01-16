import Subtitulo from '../Subtitulo'
import CardBeneficios from '../CardBeneficios'
import Dinheiro from '../../assets/images/Dinheiro.png'
import Brasil from '../../assets/images/Brasil.png'
import Relóginho from '../../assets/images/Relóginho.png'
import Atendimento from '../../assets/images/Atendimento.png'
import Seguro from '../../assets/images/Seguro.png'

export default function Servicos() {
    return (
        <div id='Beneficios' className='flex w-[100%] justify-center'>
            <div className="flex flex-col w-[60%] h-full">

                <Subtitulo titulo={'Benefícios'} />

                <div className='grid gap-3 grid-cols-5 content-center text-center self-center w-[100%]'>

                    <CardBeneficios ImagemCard={Dinheiro} TextoCard={'Parcele em Até 12'} />

                    <CardBeneficios ImagemCard={Brasil} TextoCard={'Envio para Todo o Brasil'} />

                    <CardBeneficios ImagemCard={Relóginho} TextoCard={'Envio Rápido'} />

                    <CardBeneficios ImagemCard={Atendimento} TextoCard={'Atendimento Especializado'} />

                    <CardBeneficios ImagemCard={Seguro} TextoCard={'Compra 100% Segura'} />

                </div>
            </div>
        </div>
    )
}