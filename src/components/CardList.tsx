import { useEffect, useState } from "react";
import { api } from "../config/ApiConfig";
import Product from "../types/Product";
import Card from "./Card";
import { HttpStatusCode } from "axios";

import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";



function CardList() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    const { product } = useProduct();
    
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await api.get<Product[]>('/products'); 
            setProducts(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
        
      }, []);
      useEffect(() => {
        if (product) {
          setProducts((prevProducts) => [product,...prevProducts ]); 
        }
        
      }, [product]);
      
    

      const deleteItem = (id : number) => {
        console.log(id);
        
        if(id>20)
        {
          setProducts(products.filter(product => product.id!==id));
        
      }
      else {
        const fetchData = async () => {
          try{
              const res = await api.delete(`/products/${id}`);
              if(res.status==HttpStatusCode.Ok){
                  setProducts(products.filter(product => product.id!==id));
                  
              }
          }
          catch(err){
              console.error(">>> "+err);
          }
      }
      fetchData();
      }
      console.log(products);
      }
  return (
    <div>
        <div className="w-7/8 flex flex-col md:flex-row justify-end items-center mx-auto my-5">
        <button onClick={() => navigate('/addProduct')} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Product</button>
        </div>
        
        {products.map((product:Product) => (
        <Card key={product.id} item = {product} deleteProduct={deleteItem} />
      ))}
    </div>
  )
}

export default CardList