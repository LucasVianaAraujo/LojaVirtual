import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardProduto from '../../components/CardProduto'

export default function Produtos() {
    return (
        <div className='flex flex-col w-full'>
            <Header />
            <div className='flex w-full flex-col items-center justify-center pt-10 h-auto mt-25'>

                <div className='flex w-[60%] h-10 gap-5'>
                    <div className='flex w-[70%]'>
                        <input placeholder='Filtrar por Nome, Preço ou Categoria...' className='w-full rounded-md outline-0 border-0 p-3 bg-gray-300' type="text" />
                    </div>
                    <div className='flex cursor-pointer justify-center rounded-md items-center text-white font-medium bg-blue-500 w-[30%]'>
                        <h2>TODAS AS CATEGORIAS</h2>
                    </div>
                </div>

                <div className='grid gap-2 pt-10 w-[60%] grid-cols-5'>
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