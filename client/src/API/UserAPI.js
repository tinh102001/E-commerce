import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserAPI(token) {
    let navigate = useNavigate()
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [userName, setUserName] = useState([])
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [history, setHistory] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    setUserName(res.data.name)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])

    // const addCart = async (product) => {
    //     if(!isLogged) return navigate("/login")

    //     const check = cart.every(item =>{
    //         return item._id !== product._id
    //     })

    //     if(check){
    //         setCart([...cart, {...product, quantity: 1}])

    //         await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
    //             headers: {Authorization: token}
    //         })

    //     }else{
    //         alert("This product has been added to cart.")
    //     }
    // }
    const addCart = async (product, quantity) => {
        if(!isLogged) return navigate("/login")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
        setCart([...cart, {...product,quantity : quantity}])

            await axios.patch('/user/addcart', {cart: [...cart, {...product,quantity : quantity}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert("This product has been added to cart.")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        user : [userName, setUserName],
        addCart: addCart,
        cart: [cart, setCart],
        quantity: [quantity, setQuantity],
        history: [history, setHistory]  
    }
}

export default UserAPI