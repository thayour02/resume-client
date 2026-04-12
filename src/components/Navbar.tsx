import { Link } from 'react-router-dom'
import genminisvg from '../assets/gemini-svg.svg'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/')
    }
    const user = { name: "Modupe", age: 10 }
    return (
        <div className="bg-white shadow h-15">
            <nav className='flex items-center justify-between transition-all max-w-7xl mx-auto px-4 py-3.5 text-translate-300'>
                <Link to='/' >
                    <img src={genminisvg} alt="logo" className='h-10 w-auto' />
                </Link>
                <div className='flex items-center gap-8 text-sm px-10'>
                    <p className='max-sm:hidden'>hello,{user?.name}</p>
                    <button onClick={handleSubmit} className=" md:flex items-center bg-gradient-to-r from-[#4F39F6] to-[#FDFEFE] 
                    text-gray-800 font-medium px-7 py-1.5 rounded-full active:scale-95 text-sm transition-all  group">
                            <span className="block  duration-200 ">
                                logout
                            </span>
                    </button>
                </div>
            </nav>

        </div>
    )
}


export default Nav