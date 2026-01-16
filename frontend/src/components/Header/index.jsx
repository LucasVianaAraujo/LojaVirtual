import DomInstrumental from '../../assets/images/DomInstrumental.png'

export default function Header() {
    return (
        <header className="flex fixed bg-blue-500 justify-center h-25 w-full items-center">

            <div className="flex w-[60%] h-[40%]">

                <div className="flex w-[33.3%]">
                    <a href="/">
                        <img className='cursor-pointer' src={DomInstrumental} alt="" />
                    </a>
                </div>

                <nav className="flex gap-20 w-[33.3%] text-white font-medium text-lg items-center">
                    <h4 className="relative cursor-pointer after:content-[''] after:absolute after-left-0relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"><a href="/">Home</a></h4>

                    <h4 className="relative cursor-pointer after:content-[''] after:absolute after-left-0relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"><a href="/produtos">Produtos</a></h4>

                    <h4 className="relative cursor-pointer after:content-[''] after:absolute after-left-0relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Sobre Nós</h4>
                </nav>

                <nav className="flex gap-20 w-[33.3%] justify-end text-white font-medium text-lg">
                    <button className='flex hover:bg-gray-300 transition-all cursor-pointer text-gray-600 font-bold bg-white w-[50%] justify-center rounded-md items-center'>Criar Conta</button>
                </nav>

            </div>

        </header>
    )
}