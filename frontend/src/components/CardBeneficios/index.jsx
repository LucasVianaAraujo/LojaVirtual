import Seta from '../../assets/images/Seta.png'

export default function CardBeneficios({ ImagemCard, TextoCard }) {
    return (
        <div className='flex h-50 flex-col shadow-2xl shadow-black/40 bg-blue-600 rounded-md justify-center items-center'>
            <img className='h-20' src={ImagemCard} alt="" />
            <h3 className='flex pt-5 text-white'>{TextoCard}</h3>
            <img src={Seta} alt="" />
        </div>
    )
}