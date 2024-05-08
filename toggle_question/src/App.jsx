import { useState } from "react";
import FAQ_card from "./components/FAQ_card";
import { FAQ } from "./data";

function App() {

  const [ selected_id, setSelected_id ] = useState(null);

  const selectedHandel = id => {
    const activeId = id === selected_id ? null : id;
    setSelected_id(activeId);
  }

  return (
    <div className="h-screen">
      <h1 className=" text-center bg-orange-500 text-white py-4 font-semibold text-[25px]">FAQ Toggle UI</h1>
      <div className=" justify-center grid gap-[2rem] container mx-auto my-10">
        {
          FAQ && FAQ.map((faq) => {
            // eslint-disable-next-line react/jsx-pascal-case
            return <FAQ_card key={faq.id} selected_id={selected_id} selectedHandel={selectedHandel} {...faq} />;
          })
        }
      </div>
      <div className=" grid justify-center text-gray-500 text-[12px] gap-1">
        <h1 className=" text-center">&copy; FAQ Toggle UI</h1>
        <h1 className=" text-center">Power by Myo Min Myat</h1>
      </div>
    </div>
  );
}

export default App;
