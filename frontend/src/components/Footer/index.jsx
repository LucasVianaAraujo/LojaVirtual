import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import DromInstrumental from '../../assets/images/DomInstrumental.png'
import Facebook from '../../assets/images/Facebook.png'

export default function Footer() {
    return (
        <footer className="flex w-full h-auto pb-10 bg-blue-600 justify-center flex-col items-center mt-30">
            <div className="grid text-white grid-cols-3 justify-center pt-15 w-[60%]">
                <div>
                    <img src={DromInstrumental} alt="" />
                    <h3 className="pt-5 w-[72%]">Mais peso. Mais atitude.</h3>
                </div>

                <div className='flex flex-col'>
                    <h1 className="font-medium text-xl">Navegação</h1>

                    <h2 className="pt-5"><a className="hover:text-gray-300 transition-all" href="#Home">Home</a></h2>
                    <h2><a className="hover:text-gray-300 transition-all" href="#Beneficios">Benefícios</a></h2>
                    <h2><a className="hover:text-gray-300 transition-all" href="#Produtos">Produtos</a></h2>
                    <h2><a className="hover:text-gray-300 transition-all" href="#Avaliacoes">Avaliações</a></h2>
                </div>


                <div className='flex flex-col'>
                    <h1 className="font-medium text-xl">Serviços</h1>
                    <div className="flex gap-5 pt-5 items-center">
                        <BsFillTelephoneFill />
                        <h2>11 9 7697-5513</h2>
                    </div>
                    <div className="flex gap-5 items-center">
                        <MdEmail />
                        <h2>dominstrumental@gmail.com</h2>
                    </div>
                    <div className="flex gap-5 items-center">
                        <FaLocationDot />
                        <h2>Acesso Andorinha Cristal, 3000</h2>
                    </div>
                </div>

            </div>

            <div className='flex flex-col pt-20 text-white'>
                <h2>Copyright ©2026 Todos os Direitos Reservados | Desenvolvido por <a className="underline" href="https://www.linkedin.com/in/lucas-viana-developer/">Lucas Viana</a></h2>
                <div className="flex invert justify-center gap-5 pt-5">
                    <img width={40} src={Facebook} alt="" />
                    <img width={40} src={Facebook} alt="" />
                    <img width={40} src={Facebook} alt="" />
                    <img width={40} src={Facebook} alt="" />
                </div>
            </div>
        </footer>
    )
}