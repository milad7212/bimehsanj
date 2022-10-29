
import Lottie from 'lottie-web';
import { useRef } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const bimeh= useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: bimeh.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../src/assets/calender.json"),
    });
  }, []);
  return (
    <div className="bg-[#7e6aff] min-h-screen">
      <div className="  pt-20 px-4 max-w-7xl mx-auto grid grid-cols-2">
        <div className="">
          <h1 className="md:text-3xl font-bold text-white  ">یادآوری بیمه</h1>
          <p className=" text-white mt-2 font-bold">با تنظیم اطلاعات، بیمه شما را یک روز قبل از سررسید به شما یادآوری میکنیم</p>
          
          <div className="my-8">

          <input className='block rounded-lg py-3 w-full my-2 pr-2 outline-none'  type="text" placeholder='موبایل (مثلا 09123456789)'/>
          <input className='block rounded-lg py-3 w-full my-2 pr-2 outline-none' type="text" placeholder='تاریخ سررسید'/>
          <input className='block rounded-lg py-3 w-full my-2 pr-2 outline-none' type="text" placeholder='نوع بیمه' />
          <button className='bg-[#058f1f] w-full text-white font-bold rounded-lg py-2'>تایید</button>
          </div>
          
        </div>
        <div className="flex justify-center items-center">
          <div ref={bimeh} className=" rounded-lg w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
