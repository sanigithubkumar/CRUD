import axios from 'axios'
import React, { useEffect, useState, } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    let { id } = useParams()
    let [value, setvalue] = useState({ name: "", email: "" })

    useEffect(() => {
        axios.put("http://localhost:9000/users/" + id).then(res => {
            setvalue(res.data)
        });
    }, [])

    let change = (e) => {
        setvalue({ ...value, [e.target.name]: [e.target.value] })
    }
    const navigate = useNavigate();

    function send(e) {
        e.preventDefault()
        axios.put("http://localhost:9000/users/" + id, value).then(res => {
            navigate("/")
        });
    }

    return (
        <>
            <h1>Update User</h1>
            <form action="">

                <input type="text" name='name' placeholder='name' value={value.name} onChange={change} /><br /><br />
                <input type="text" name='email' placeholder='email' value={value.email} onChange={change} /><br /><br />
                <button onClick={send}>Update user</button>

            </form>
        </>
    )
}

export default UpdateUser