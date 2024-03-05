import React, {useState } from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom';

const Getuser = () => {
    let [data, setdata] = useState([]);

    function demo() {
        axios.get("http://localhost:9000/users").then(res => {
            console.log(res);
            setdata(res.data)
        })

    }
    demo()
    const navigate = useNavigate();
    function add() {
        navigate('/add')
    }

    function del(id) {
        axios.delete("http://localhost:9000/users/" + id).then(res => {

        })
        navigate('/')
    }
    return (
        <>
            <strong>React DOM</strong>
            <br />
            <br />

            <table border={1} >
                {
                    data.map(a => {
                        return (
                            < tbody >
                                <tr key={a.id}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.email}</td>
                                    <td>
                                        <Link to={`/update/${a.id}`}><button>edit</button></Link>
                                        <button id='red' onClick={() => {
                                            del(a.id);
                                            // demo();
                                        }
                                        }>delete</button></td>

                                </tr>
                            </tbody>
                            
                        )
                    })
                }
            </table >
            <br />
            <button id='add' onClick={add}>ADD+</button>
        </>
    )
}

export default Getuser