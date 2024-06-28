import axios from 'axios'
import React from 'react'

const UserListing = () => {

    const [users, setUsers] = React.useState([])

    // async function getAllUsers() {

    // }

    const getAllUsers = async () => {
        await axios.get(`http://localhost:8000/users`)
            .then((res) => {
                setUsers(res?.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    React.useEffect(() => {
        getAllUsers()
    }, [])


    return (
        <>
            <div className='container my-5'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((e) => {
                                return (
                                    <tr key={e.id}>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.password}</td>
                                        <td>{e.number}</td>
                                        <td>
                                            <span><box-icon name='pencil'></box-icon></span>
                                            <span><box-icon name='trash' ></box-icon></span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserListing