import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Banner } from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
AOS.init();
const features = [
  {
    name: "Push to deploy",
    description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description: "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];
export const Index = () => {
  return (
    <>
      <Navbar />

      <section className='bg-gray-800 size-full min-h-full'>
        <div>
          <div className='relative isolate px-6 pt-14 lg:px-8'>
            <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu  overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
              <div
                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div  className='mx-auto max-w-2xl py-16 sm:py-20 lg:py-32'>
              <h1 className=' flex justify-center animate-fade-up mb-24 text-center animate-once animate-duration-[800ms] animate-ease-in-out text-5xl md:text-7xl sm:text-6xl  title text-white ' >DecoDev</h1>
              <div className='text-center'>
                <h2 className='text-xl  tracking-tight animate-fade-up animate-once animate-duration-[800ms] animate-delay-1000 animate-ease-in-out text-gray-300 md:text-3xl sm:text-2xl subtitulo'>Data to enrich your online business</h2>
                <p className='mt-6 text-xs leading-8 animate-fade-up animate-once animate-duration-[800ms] animate-delay-[2000ms] animate-ease-in-out text-gray-300 texto md:text-sm sm:text-sm '>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <a
                    href='#'
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Get started
                  </a>
                  <a href='#' className='text-sm font-semibold leading-6 text-gray-400'>
                    Learn more <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]' aria-hidden='true'>
              <div
                className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <section className=''>
        <div className='bg-gray-800 py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center lg:text-center'>
              <h2 className=' flex justify-center text-xl  leading-7 sm:text-2xl md:text-2xl lg:text-3xl text-white text'>Deploy faster</h2>
              <p className='flex justify-center mt-2 text-lg tracking-tight text-gray-300 sm:text-lg subtitulo'>Everything you need to deploy your app</p>
              <p className=' flex justify-center mt-6 text-xs sm:text-sm leading-8 text-gray-300 text'>
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
              </p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
              <dl className='grid max-w-xl  grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                {features.map((feature) => (
                  <div key={feature.name} data-aos="zoom-in" data-aos-duration="800" className='relative   pl-16 '>
                    <dt className='text-base  leading-7 text-white subtitulo2'>
                      <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                        <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className='mt-2 text-xs leading-7 text-gray-300 texto'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
