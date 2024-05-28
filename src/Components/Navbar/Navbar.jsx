import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";

const navigation = [
  { name: "Somos", path: "/Decodevs/somos" },
  { name: "Proyectos", path: "/Decodevs/Proyecto" },
  { name: "dssd", path: "/Decodevs/dssd" },
  { name: "Contactanos", path: "/Decodevs/Contacto" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };

    // Reset scroll position when navigating to a new page
    resetScrollPosition();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className='fixed inset-x-0 top-0 z-50 w-full'>
      <nav className={`flex items-center justify-between p-6 lg:px-8 ${scrolled ? "bg-opacity-75  transition-all  bg-slate-800 backdrop-blur-sm shadow-lg" : ""}`}>
        {/* Logo a la izquierda */}
        <div className='flex items-center'>
          <Link to='/Decodevs/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
          </Link>
        </div>
        {/* Componentes centrados */}
        <div className='hidden lg:flex flex-grow  justify-center gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className='transition ease-in-out navbar delay-150 text-xs  font-semibold leading-6 text-white hover:-translate-y-1 hover:scale-110 duration-300'
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Botón de menú para dispositivos móviles */}
        <div className='flex lg:hidden'>
          <button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
      </nav>
      {/* Panel de menú desplegable para dispositivos móviles */}
      <Dialog className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            {/* Logo a la izquierda */}
            <Link to='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
            </Link>
            {/* Botón de cierre del menú */}
            <button type='button' className='-m-2.5 rounded-md p-2.5 text-white' onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {/* Elementos de navegación */}
                {navigation.map((item) => (
                  <Link key={item.name} to={item.path} className='-mx-3 block rounded-lg px-3 py-2 text-base navbar font-semibold leading-7 text-white hover:bg-gray-50'>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
