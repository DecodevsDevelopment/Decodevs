import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Contacto.css";
export const Contacto = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gray-800 py-16 sm:py-20 lg:py-32'>
        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div className='absolute inset-x-0 -top-40 -z-10  overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className='max-w-lg mx-auto  p-6 bg-gray-800 text-white rounded-lg shadow-corners   '>
            <h2 className='text-2xl flex justify-center font-bold mb-4'>Contact Us</h2>
            <p className='mb-4'>Let us help you find the right plan for your business.</p>
            <p className='mb-6 text-sm'>
              Inputs marked with <span className='text-red-500'>*</span> are required.
            </p>
            <form>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block mb-1' htmlFor='first-name'>
                    First Name
                  </label>
                  <input className='w-full p-2 bg-zinc-700 border border-zinc-600 rounded' type='text' id='first-name' placeholder='Your first name' />
                </div>
                <div>
                  <label className='block mb-1' htmlFor='last-name'>
                    Last Name
                  </label>
                  <input className='w-full p-2 bg-zinc-700 border border-zinc-600 rounded' type='text' id='last-name' placeholder='Your last name' />
                </div>
              </div>
              <div className='mb-4'>
                <label className='block mb-1' htmlFor='company'>
                  Company
                </label>
                <input className='w-full p-2 bg-zinc-700 border border-zinc-600 rounded' type='text' id='company' placeholder='Your company or organization name' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1' htmlFor='email'>
                  Email <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <input className='w-full p-2 bg-zinc-700 border border-zinc-600 rounded' type='email' id='email' placeholder='Your preferred contact email' />
                  <img undefinedhidden='true' alt='email icon' src='https://placehold.co/20x20' className='absolute right-2 top-2' />
                </div>
              </div>
              <div className='mb-6'>
                <label className='block mb-1' htmlFor='message'>
                  Message <span className='text-red-500'>*</span>
                </label>
                <textarea className='w-full p-2 bg-zinc-700 border border-zinc-600 rounded' id='message' rows='4' placeholder='How can we help?'></textarea>
              </div>
              <button className='w-full p-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded'>Submit</button>
            </form>
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
      <Footer />
    </>
  );
};
