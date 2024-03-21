import { useState } from "react";


const Product = ({product,buyBtn,carts}) => {
    const {product_img,product_name,price,short_description,hover_img,product_id} =product
    const [hovered,setHovered] = useState(false)
    
    const alreadyAdded = carts.find(cart => cart.product_id === product_id)
  return (
    <div  className=" mx-4">
      <div className="card   bg-base-100 shadow-xl h-full border-2 " onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} >
         <figure className="px-10 pt-10 rounded-2xl">
           <img className='w-full h-60 pt-10 object-cover rounded-xl ' src={ hovered ? hover_img : product_img} style={{transition : "transform 0.8s ease-in-out"}} />
         </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_name}</h2>
                <p>{short_description}</p>
                <p>$ {price}</p>
                <div className="card-actions">
             
              
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-400" onClick={() => { buyBtn(product); document.getElementById('my_modal_1').showModal(); setHovered(false)}}>Buy Now</button>
              <dialog id="my_modal_1" className="modal">
              {alreadyAdded ? "Added" : "Buy Now"}
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{ alreadyAdded ? 'No space' : ' added'}</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    <form method="dialog">
                      
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Product
