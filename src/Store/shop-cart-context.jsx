import { createContext } from "react";


export const CartContext = createContext({ 
    product :[],
    addProduct:(id)=>{},
    increment:(id)=>{},
    decrement:(id)=>{}
})