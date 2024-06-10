import CartCard from "../components/CartCard"
import { UploadIcon } from "../icons"



function Checkout() {
  return (<>
    <div className="grid grid-cols-2 px-32 pt-14">
      <div className="w-full">
        <h1 className="text-3xl font-extrabold mb-4">Order Summary</h1>
          
            <CartCard  />
            <CartCard  />
            <CartCard  />
          
        <div className="flex justify-end items-center pr-36">
          <h1 className=" font-semibold pt-4 text-xl bg-kb-black text-white pb-2 px-4 rounded-md mt-4"> Total Payment : 555 $</h1>
        </div>
      </div>
      <div className="flex justify-end  ">
        <div className="flex flex-col w-full items-end">
        <h1 className="text-3xl font-extrabold">Address</h1>
        <div className="bg-white shadow-md w-[60%] h-[40%] mt-4 p-8 rounded-md ">
          <h1 className="font-semibold pt-4"> name lastname : asdasdasd </h1>
          <h1 className="font-semibold pt-4"> address : asdasd </h1>
          <h1 className="font-semibold pt-4"> phone : asdasd </h1>
        </div>
      </div>
      </div>
    </div>

<div className="grid grid-cols-2 px-28 pt-14">

  <div>
  <h1 className="text-3xl font-extrabold">Payment Confirmation</h1>
  <h1> upload payment credential here </h1>
  <div className="bg-white w-[570px] h-[350px] flex items-center justify-center rounded-md mt-8 shadow-lg">
    <div className="flex justify-center items-center">
      <div className="w-[250px] h-[250px] bg-gray-300 rounded-full relative flex items-center justify-center" >
      <UploadIcon className=" w-40  " />
      <h1 className="absolute  top-[75%] left-[20%]">click here to upload</h1>
      </div>
    </div>
    </div> 
  </div>

  <div className="flex justify-end ">
    <div className="flex flex-col w-full h-[500px] items-end">
    <h1 className="text-3xl font-extrabold">PAYMENT METHOD</h1>
        <div className="bg-white shadow-md w-[60%] h-[40%] mt-upload payment credential here p-8 rounded-md ">
          <h1 className="font-semibold pt-4"> name lastname : asdasdasd </h1>
          <h1 className="font-semibold pt-4"> address : asdasd </h1>
          <h1 className="font-semibold pt-4"> phone : asdasd </h1>
        </div>
      </div>
  </div>

    
</div>

<div className="flex justify-end w-[90%] mb-20 mt-[-20]"> 
    <button className="w-96 bg-kb-black text-white h-14 font-semibold"> Confirm Payment</button>
    </div>
</>
  )
}

export default Checkout