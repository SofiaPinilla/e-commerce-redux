import axios from "axios";

const API_URL ="http://localhost:3000"

const getProducts = async()=>{
    const res = await axios.get(API_URL + "/products")
    return res.data
}
const addLike = async(_id)=>{
    const token = JSON.parse(localStorage.getItem("token"))
    const res = await axios.put(API_URL + "/products/like/"+_id,{},{
        headers:{
            Authorization:token
        }
    })
    return res.data
}
const productsService ={
    getProducts,
    addLike
}

export default productsService
