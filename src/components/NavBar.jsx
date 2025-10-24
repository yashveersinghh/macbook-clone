import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
        <nav className='flex items-center justify-between w-full max-w-7xl mx-auto px-10'>
            <img src="/logo.svg" alt="Apple logo" className='w-5 h-5 brightness-75 hover:brightness-200 transition-all duration-200' />

            <ul className='flex-1 justify-center hidden sm:flex items-center gap-5 ml-10 list-none'>
                {navLinks.map(({ label}) => (
                    <li key={label}>
                        <a href={label} className="text-sm">{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <div className='flex-center gap-3'>
            <button>
                <img src="/search.svg" alt="Search" className='w-6 h-6' />
            </button>
            <button>
                <img src="/cart.svg" alt="Cart" className='w-6 h-6' />
            </button>
        </div>
    </header>
  )
}

export default NavBar