

const Cart = ({cart}) => {
    const {product_name,price} = cart
  return (
    <div className="bg-slate-200 mx-auto mt-5 w-full rounded-3xl flex justify-around items-center px-4">
      <h2 className="  space-y-3 rounded-xl p-2">
        {product_name}
      </h2> 
      <p>{price}</p>
    </div>
  )
}

export default Cart
