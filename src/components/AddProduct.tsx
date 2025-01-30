import  { HttpStatusCode } from 'axios';
import React, { useState } from 'react'

import AddProductReq from '../types/AddProductReq';
import { api } from '../config/ApiConfig';

import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [desc, setDesc] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [imageURL, setimageURL] = useState<string>("");
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        console.log(title,price,imageURL,desc)
        const sendData = async () =>{
            try {
                const newProd : AddProductReq = {
                    title : title,
                    price : price,
                    description : desc,
                    category : category,
                    image : imageURL

                }
                console.log(newProd)
                const res = await api.post('/products',newProd);
                console.log(">>>>" +res.data);
                if(res.status==HttpStatusCode.Ok){
                    console.log("Product Added Successfully" + res.data);
                    alert("Product Added successfully");
                    navigate('/');
                }
                else {
                    console.log(" Error>>>" + res.data);
                }
            }
            catch(err){
                alert("Product Not added");
                console.log(err);
            }
            
        }
        sendData();
    }

  return (
    
    <div>
        <div className="my-5 w-screen flex justify-center  ml-5 items-center" >
            <span className="text-[#2973B2] text-center font-[Delius] font-semibold text-3xl">Add New Product</span>
        </div>
      <form className='w-7/8 mx-auto' onSubmit={handleSubmit} >
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="title"  className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                    <input type="text" id="title" value={title} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" required />
                </div>
                <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price($)</label>
                    <input type="number" step=".01" value={price} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setPrice(parseFloat(event.target.value))} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="200" required />
                </div>
                <div>
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 ">Image URL</label>
                    <input type="url" id="image" value={imageURL} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setimageURL(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Image URL" required />
                </div>  
                <div>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                    <input type="text" id="category" value={category} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setCategory(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bags"  required />
                </div>
                
            </div>
            <div className="mb-6">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <input  id="description" type='text' value={desc} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setDesc(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Details of your Product" required />
            </div> 
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
        </form>
        <div className="w-7/8 mx-auto my-5">
        <button onClick={() =>navigate('/')} className="text-white  bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Cancel</button>
        </div>
    </div>
  )
}

export default AddProduct