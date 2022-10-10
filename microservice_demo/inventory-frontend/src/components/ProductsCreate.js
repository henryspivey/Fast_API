import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Wrapper } from "./Wrapper"

export const ProductsCreate = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const nav = useNavigate()
    const submit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8000/products', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name, quantity, price})
        })
        await nav(-1)

    }

    return (
    <Wrapper><form className="mt-3" onSubmit={submit}>
        <div>
            <input className="form-control" placeholder="Name" onChange={e=> setName(e.target.value)}/>
            <label>Name</label>
        </div>
        <div>
            <input className="form-control" placeholder="Price"  onChange={e=> setPrice(e.target.value)}/>
            <label>Price</label>
        </div>
        <div>
            <input className="form-control" placeholder="Quantity"  onChange={e=> setQuantity(e.target.value)}/>
            <label>Quantity</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>   
    </Wrapper>)
}