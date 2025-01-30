import ReactStars from "react-stars";
import Product from "../types/Product";
function Card({item, deleteProduct}:{item: Product, deleteProduct : (id: number) => void}) {

    const onClickDelete = () => {
        deleteProduct(item.id);
    }

  return (
    <div className="bg-[#9ACBD0] rounded-4xl w-7/8 flex flex-col md:flex-row items-center mx-auto my-5">
        <div className="w-[200px] h-[270px] lg:my-0 sm:my-2 md:my-0 md:w-fit sm:w-fit flex items-center justify-center">
            <img
            src={item.image}
            alt="Product"
            className="w-[200px] h-[270px] object-fit "
            />
        </div>
        <div className="w-full md:w-4/5 h-66 flex  flex-col justify-center md:self-start md:justify-start items-center md:items-start text-center md:text-left md:pl-4">
            <p className="text-lg my-1 font-semibold">{item.title}</p>
            <div className="flex my-1 items-center">
            <ReactStars
                count={5}
                edit={false}
                size={18}
                value={item.rating.rate? item.rating.rate : 0}
                isHalf={true}
                color2="#ffd700"/>
            <p className="text-gray-600 ml-2">{item.rating.count? item.rating.count : 0}</p>
            </div>
            <p className="text-gray-600 line-clamp-3 leading-6.5 my-1">{item.description}</p>
            <p className="text-gray-600 my-1">Category: {item.category}</p>
            <p className="text-gray-600 my-1 justify-end mt-auto">Price: ${item.price}</p>
            <button type="button" onClick={onClickDelete} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Delete Product</button>
           
        </div>
    </div>
    
    
  )
}

export default Card