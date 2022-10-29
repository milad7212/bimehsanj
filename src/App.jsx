import Lottie from "lottie-web";
import { useRef, useState } from "react";
import { useEffect } from "react";
import "./App.css";

// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "./validations/formSchema";

function App() {
  const bimeh = useRef(null);
  const completebimeh = useRef(null);
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  useEffect(() => {
    Lottie.loadAnimation({
      container: bimeh.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../src/assets/calender.json"),
    });
    
  }, []);
  useEffect(() => {
    Lottie.loadAnimation({
      container: completebimeh.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../src/assets/calenderwomanman.json"),
    });
  }, [status])
  

  const submit = (data) => {
    setStatus('complete')
    
  };
  return (
    <div className="bg-[#7e6aff] min-h-screen">
      <div className="  pt-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <h1 className="text-2xl md:text-3xl font-bold text-white  ">
            یادآوری بیمه
          </h1>
          <p className=" text-white mt-2 font-bold">
            با تنظیم اطلاعات، بیمه شما را یک روز قبل از سررسید به شما یادآوری
            میکنیم
          </p>
          <form onSubmit={handleSubmit(submit)}>
            <div className="my-8">
              <input
                className="block rounded-lg py-3 w-full my-2 pr-2 outline-none"
                type="text"
                placeholder="موبایل (مثلا 09123456789)"
                {...register("mobile")}
              />
              {errors["mobile"] && (
                <p className="my-4 font-bold text-red-900">
                  {errors["mobile"]?.message}
                </p>
              )}
              <input
                className="block rounded-lg py-3 w-full my-2 pr-2 outline-none"
                type="text"
                placeholder="تاریخ سررسید"
                {...register("date")}
              />
              {errors["date"] && (
                <p className="my-4 font-bold text-red-900">
                  {errors["date"]?.message}
                </p>
              )}
              <input
                className="block rounded-lg py-3 w-full my-2 pr-2 outline-none"
                type="text"
                placeholder="نوع بیمه"
                {...register("type")}
              />
              {errors["type"] && (
                <p className="my-4 font-bold text-red-900">
                  {errors["type"]?.message}
                </p>
              )}
              <button className="bg-[#058f1f] w-full text-white font-bold rounded-lg py-2 active:scale-95 ease-in-out duration-200">
                تایید
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <div ref={bimeh} className=" rounded-lg w-2/3 mx-auto"></div>
        </div>
      </div>

      {status =='complete' &&
      <div className="fixed inset-0 bg-[#7e6aff] flex justify-center items-center flex-col">
        <div className="relative">
          <div onClick={()=>setStatus('')} className="fixed top-4 right-6 cursor-pointer text-white font-bold">بازگشت</div>
          <div ref={completebimeh} className=" rounded-lg w-2/3 md:w-1/3 mx-auto"></div>
          <p className="text-center text-3xl font-bold text-white ">
            اطلاعات با موفقیت ثبت شد.
          </p>
        </div>
      </div>}

    </div>
  );
}

export default App;
