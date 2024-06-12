

function OrderCard({id , status, orderItems}) {

  
  // console.log(`++++++ ${orderItems} +++++++`)
  
  return (
   <>
    <div className="w-full  flex items-center justify-center p-10 border-2 rounded-md shadow-sm hover:shadow-lg hover:cursor-pointer ">
      
      
      <div className="mx-4">
         <h1 className="font-bold"> Order no.{id} </h1>
      </div>
      
      <div className="mx-8 flex flex-col">
      <div className="flex gap-1"> <span className="font-bold"> Product : </span> { orderItems.map(item => (<p key={item.id}> {item.product.name} </p>)  ) }  </div>
      
      </div>

     

      
      <div className="flex flex-1 justify-end  items-center mr-4">
     
      <div className= {` bg-kb-black text-white w-32 h-10 rounded-md border-2 flex justify-center items-center ${status === "APPROVED" ? 'text-green-500' : status === "SHIPPING" ? 'text-blue-400' : null} `}> {status}</div>
      </div>
      
     

      
    </div>

     
    </>
  )
}

export default OrderCard