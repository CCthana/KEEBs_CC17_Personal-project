

function OrderCard() {
  return (
   <>
    <div className="w-full  flex items-center justify-center p-10 border-2 rounded-md shadow hover:shadow-lg hover:cursor-pointer ">
      
      
      <div className="mx-4">
         <h1 className="font-bold"> Order no. </h1>
      </div>
      
      <div className="mx-8 flex flex-col">
      <div> <span className="font-bold"> Product : </span> asdasdasd, asdasddasd, asdasdads </div>
      
      </div>

      
      <div className="flex flex-1 justify-end mr-4">
      <div className="  bg-kb-black text-white w-32 h-10 rounded-md border-2 flex justify-center items-center"> PENDING </div>
      </div>
      
     

      
    </div>

     
    </>
  )
}

export default OrderCard