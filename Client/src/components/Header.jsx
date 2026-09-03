import React from 'react'
import { Link, NavLink ,useNavigate } from 'react-router-dom'

const Header = () => {

 const [isDark, setIsDark] = React.useState(() => {
  return localStorage.getItem('movix-theme') === 'dark';
});

const navigater = useNavigate();

const toggleTheme = () => {
  const newVal = !isDark;
  setIsDark(newVal);
  localStorage.setItem('movix-theme', newVal ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', newVal);
};
React.useEffect(() => {
  const saved = localStorage.getItem('movix-theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);


   
  const handlesearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
     e.target.reset();
     return navigater(`/search?q=${query}`);
  }

  const activeClass = "text-base block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 dark:bg-brand dark:text-white"
  const inActiveClass = "text-base block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent dark:text-gray-300"

  const [hidden, setHidden] = React.useState(true);

  return (
    <header>

      <nav className="bg-neutral-primary dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-default dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Movix Logo" />
            <span className="self-center text-2xl text-heading dark:text-white font-semibold whitespace-nowrap">Movix</span>
          </Link>

          <div className=" flex items-center md:order-2">

          
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle dark mode"
              className="flex items-center justify-center w-10 h-10  m-5 rounded-lg border border-transparent text-body dark:text-gray-300 hover:bg-neutral-secondary-medium dark:hover:bg-gray-700 hover:text-heading dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-tertiary transition-colors"
            >
               {/* Moon icon  */}
              <svg
                aria-hidden="true"
                className={`w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-0 scale-50 rotate-90 absolute' : 'opacity-100 scale-100 rotate-0'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>

               {/* Sun icon  */}
              <svg
                aria-hidden="true"
                className={`w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90 absolute'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1ZM12 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1ZM4.22 4.22a1 1 0 011.42 0l.7.71a1 1 0 01-1.42 1.41l-.7-.7a1 1 0 010-1.42ZM17.66 17.66a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42ZM2 12a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1ZM18 12a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1ZM6.34 17.66a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0ZM19.78 4.22a1 1 0 010 1.42l-.7.7a1 1 0 01-1.42-1.41l.7-.71a1 1 0 011.42 0ZM12 7a5 5 0 100 10A5 5 0 0012 7Z" />
              </svg>
            </button>

            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="flex items-center justify-center md:hidden text-body dark:text-gray-300 hover:text-heading dark:hover:text-white bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm w-10 h-10 focus:outline-none"
            >
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-body dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <form  onSubmit={handlesearch}>
              <input  name="search"
                type="text"
                className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium dark:bg-gray-800 border border-default-medium dark:border-gray-600 text-heading dark:text-white text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 shadow-xs placeholder:text-body dark:placeholder:text-gray-400"
                placeholder="Search"
                autoComplete='off'
              /> </form>
            </div>

            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body dark:text-gray-300 rounded-base md:hidden hover:bg-neutral-secondary-soft dark:hover:bg-gray-700 hover:text-heading dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>

          </div>

          <div className={`items-center justify-between ${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`} id="navbar-search">

            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-body dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              
              <form  onSubmit={handlesearch}>
              <input name="search"
                type="text"
                className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium dark:bg-gray-800 border border-default-medium dark:border-gray-600 text-heading dark:text-white text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 shadow-xs placeholder:text-body dark:placeholder:text-gray-400"
                placeholder="Search"
                autoComplete='off'
              /></form>
            </div>

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default dark:border-gray-700 rounded-base bg-neutral-secondary-soft dark:bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">

              <li>
                <NavLink to="/" className={({ isActive }) =>
                  isActive ? activeClass : inActiveClass
                }>Home</NavLink>
              </li>

              <li>
                <NavLink to="movie/popular" className={({ isActive }) =>
                  isActive ? activeClass : inActiveClass
                }>Popular</NavLink>
              </li>

              <li>
                <NavLink to="movie/top" className={({ isActive }) =>
                  isActive ? activeClass : inActiveClass
                }>Top Rated</NavLink>
              </li>

              <li>
                <NavLink to="movie/upcoming" className={({ isActive }) =>
                  isActive ? activeClass : inActiveClass
                }>Up Coming</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header