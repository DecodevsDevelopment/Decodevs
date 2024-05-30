import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Somos.css";
AOS.init();
const CardNosotros = ({ nombre, especialidad, Empresa, instagram, github }) => {
  return (
    <div className='flex flex-col items-center p-2'>
      <img
        className='object-cover w-32 h-32 rounded-full ring-4 ring-gray-300'
        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        alt=''
      />

      <h1 className='mt-4 text-base  text-center text-white tituloNombre '>{nombre}</h1>
      <p className='mt-2 text-gray-400 descripcion text-xs'>{Empresa} {especialidad} </p>

      <div className='flex mt-3 -mx-2'>
        <a href={instagram} className='mx-2 text-gray-300 hover:animate-jump  hover:text-gray-100' aria-label='Instagram'>
       <svg className='w-6 h-6 fill-current' fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
        </a>

        <a href={github} className='mx-2 text-gray-300 hover:animate-jump  hover:text-gray-100' aria-label='Github'>
          <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export const Somos = () => {
  return (
    <>
      <Navbar />
      <section className='bg-gray-800 min-h-screen relative'>
        <div className='container px-6 py-10 mx-auto'>
          <h1 className='text-2xl my-16 font-semibold text-center titSomos text-white capitalize lg:text-3xl'>Our Executive Team</h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
          </p>

          <div className='grid grid-cols-1 gap-8 mt-20 mb-20 sm:grid-cols-2 lg:grid-cols-4'>
            <div data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="500">
            <CardNosotros  nombre='Nicolas Iglesias' Empresa='Ceo, ' especialidad='Front end'  instagram={'https://www.instagram.com/nicoo_i'} github={'https://github.com/nicooiglesias'} />
            </div>
            <div data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="500">
            <CardNosotros data-aos="fade-down" nombre='Franco Orlando' Empresa='Co-Ceo, ' especialidad= 'Back end' instagram={'https://www.instagram.com/francorl_'} github={'https://github.com/francorl'} />
            </div>
             <div data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="500">
            <CardNosotros data-aos="fade-up" nombre='Tomas Calderaro' especialidad= 'Front end' instagram={'https://www.instagram.com/tomascalderaro'} github={'https://github.com/tomasjcalderaro'} />
            </div>
            <div data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="500">
            <CardNosotros data-aos="fade-down" nombre='Santiago Araya' especialidad= 'Back end' instagram={'https://www.instagram.com/santiaaraya'} github={'https://github.com/santi23A'} />
            </div>
          </div>
        </div>
        <div className=' bottom-0 left-0 w-full'>
          <Footer />
        </div>
      </section>
    </>
  );
};
