

const Product = ({product}) => {
    const {product_img,product_name,price,short_description} =product
  return (
    <div  className="lg:w-[400px] lg:h-[700px] mx-4">
      <div className="card   bg-base-100 shadow-xl h-full border-2">
         <figure className="px-10 pt-10">
           <img className='w-full  pt-10 object-cover rounded-xl' src={product_img}  />
         </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_name}</h2>
                <p>{short_description}</p>
                <p>$ {price}</p>
                <div className="card-actions">
             
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-400">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
