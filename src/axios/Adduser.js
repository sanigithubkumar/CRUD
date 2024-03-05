import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adduser = () => {
    let [value, setvalue] = useState({ name: "", email: "" })

    let change = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate();
    function send(e) {
        e.preventDefault()
        axios.post("http://localhost:9000/users", value).then(res => {
            navigate("/")
        })
    }
    
    return (
        <>
            <form action="">

                <input type="text" name='name' placeholder='name' value={value.name} onChange={change} /><br /><br />
                <input type="text" name='email' placeholder='email' value={value.email} onChange={change} /><br /><br />
                <button onClick={send}>add user</button>

            </form>
        </>
    )
}

export default Adduser