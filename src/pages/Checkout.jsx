import { useEffect, useRef, useState } from "react"
import CartCard from "../components/CartCard"
import CheckoutCard from "../components/CheckoutCard"
import useCart from "../hooks/useCart"
import { UploadIcon } from "../icons"
import userApi from "../apis/user"
import useAuth from "../hooks/useAuth"
import orderApi from "../apis/order"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"
import { toast } from "react-toastify"



function Checkout() {
 const {cartItem, fetchCartItem} = useCart()
 const {authUser} = useAuth()
 const fileEl = useRef();

 const [file, setFile]  = useState(null);
 const [subtotal , setSubtotal] = useState(0);
 const [loading, setIsLoading] = useState(false);
 
 const navigate = useNavigate();

 useEffect(() => {
  const totalPrice = cartItem.reduce((total, item) => total + (+item.price), 0);
  setSubtotal(totalPrice)
},[cartItem])


const handleClickUpload = async () => {
  try {
    console.log(cartItem)

    setIsLoading(true)
    if(!file) {
        alert('please upload payment')
    }

    if(file) {
      const formData = new FormData();
      formData.append('image', file)

      const resUpload = await userApi.upload(formData);

      console.log(resUpload)
      

      const productInput = cartItem.reduce((acc, item) =>  {
        acc.push({
          productId: item.id,
          price: item.price,
        })
        return acc
      }, [])
      
      console.log(productInput)

      const data = {
        payment: resUpload.data.uploadUrl,
        userId: authUser.id,
        product: productInput
      }

      const output = await orderApi.createOrder(data)
      console.log(output.data.message)

    }



  } catch (err) {
    console.log(err)
  } finally {
    setIsLoading(false)
    if(file) {
      fetchCartItem()
      navigate('/')
    }
    toast.success('Order succsess, Thank you for shopping with us',{autoClose: 5000,theme: "colored"})
  }
}



  return (
  <div className="relative">
   {cartItem.length < 1 ? <> <div className="absolute h-full w-full bg-white z-10 "> <div className="h-full flex justify-center items-center font-bold text-4xl"> You cart is empty </div> </div> </> : null }
  { loading ? <Spinner /> : 
  <>
    <div className="grid grid-cols-2 px-32 pt-14">
      <div className="w-full">
        <h1 className="text-3xl font-extrabold mb-4">Order Summary</h1>
          
          <div>
          {cartItem?.map(item =>
            <CheckoutCard 
               key={item.cartId}
               cartId={item.cartId}
               productId={item.id}
               image={item.image}
               name={item.name}
               price={item.price}
              
            /> 
            )}
          </div>
          
        <div className="flex justify-end items-center pr-36">
          <h1 className=" font-semibold pt-4 text-xl bg-kb-black text-white pb-2 px-4 rounded-md mt-4"> Total Payment : {subtotal} $</h1>
        </div>
      </div>
      <div className="flex justify-end  ">
        <div className="flex flex-col w-full items-end">
            <h1 className="text-3xl font-extrabold">{authUser?.userName} Address</h1>
        <div className="bg-white shadow-md w-[60%] mt-4 p-8 rounded-md ">
          <h1 className="font-md text-lg "> <span className="font-bold" > Name:  </span> {authUser?.firstName} {authUser?.lastName} </h1>
          <h1 className="font-md text-lg pt-4"> <span className="font-bold" >Address :</span> {authUser?.address} </h1>
          <h1 className="font-md  text-lg pt-4"> <span className="font-bold" >Phone : </span>{authUser?.phone} </h1>
        </div>
      </div>
      </div>
    </div>

<div className="grid grid-cols-2 px-28 pt-14">

  <div>
    <input type='file' ref={fileEl} className="hidden" onChange={e => {
      if (e.target.files[0]){
        setFile(e.target.files[0]);
      }
    }} />
  <h1 className="text-3xl font-extrabold">Payment Confirmation</h1>
  <h1> upload payment credential here </h1>
  <div className="bg-white w-[570px] h-[450px] flex items-center justify-center rounded-md mt-8 shadow-lg hover:shadow-2xl hover:cursor-pointer object-contain" onClick={() => fileEl.current.click()} >
    {file ? <img src={URL.createObjectURL(file)} className=" w-[70%] object-contain rounded-md shadow-md"/> : <div className="flex justify-center items-center">
      <div className="w-[250px] h-[250px] bg-gray-300 rounded-full relative flex items-center justify-center" >
      <UploadIcon className=" w-40  " />
      <h1 className="absolute  top-[75%] left-[20%]">click here to upload</h1>
      </div>
    </div>}
    </div> 
  </div>

  <div className="flex justify-end ">
    <div className="flex flex-col w-full h-[500px] items-end">
    <h1 className="text-3xl font-extrabold">PAYMENT METHOD</h1>
        <div className="bg-white shadow-md w-[60%] h-[40%]  p-8 rounded-md ">
          <h1 className="font-semibold pt-4"> Bank Account : LBANK</h1>
          <h1 className="font-semibold pt-4"> Account no. 12-123-12-12-1 </h1>
          <h1 className="font-semibold pt-4"> Branch : BKK </h1>
        </div>
      </div>
  </div>

    
</div>

    <div className="flex justify-end w-[90%] mb-20 mt-[-20]"> 
    <button className="w-96 bg-kb-black text-white h-14 font-semibold" onClick={handleClickUpload}> Confirm Payment</button>
    </div>
  </>
     }
</div>
  )
}

export default Checkout