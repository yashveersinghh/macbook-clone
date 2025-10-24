import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
        <nav className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
            <img src="/logo.svg" alt="Apple logo" className='w-3 h-3 brightness-75 hover:brightness-200 transition-all duration-200' />

            <ul className='flex-1 justify-center hidden sm:flex items-center gap-3 ml-10 list-none text-[10px]'>
                {navLinks.map(({ label}) => (
                    <li key={label}>
                        <a href={label} className="text-[8px]">{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <div className='flex-center gap-3'>
            <button>
                <img src="/search.svg" alt="Search" className='w-4 h-4' />
            </button>
            <button>
                <img src="/cart.svg" alt="Cart" className='w-4 h-4' />
            </button>
        </div>
    </header>
  )
}

export default NavBar