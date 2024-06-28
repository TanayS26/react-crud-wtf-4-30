import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from "react-hot-toast"
import { useFormik } from 'formik'

const CreateUser = () => {
    const navigate = useNavigate();
    const myFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            number: '',
        },

        onSubmit: async (values) => {
            axios.post(`http://localhost:8000/users`, values)
                .then((res) => {
                    console.log(res);
                    toast.success('User created!')
                    setTimeout(() => {
                        navigate("/list-users")
                    }, 1000)
                })
                .catch((err) => {
                    toast.error(err.message)
                })
        }
    })
    return (
        <>
            <div className='container my-5'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6 my-2'>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                onChange={myFormik.handleChange}
                                value={myFormik.values.name}
                            />
                        </div>
                        <div className='col-lg-6 my-2'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                onChange={myFormik.handleChange}
                                value={myFormik.values.email}
                            />
                        </div>
                        <div className='col-lg-6 my-2'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                name='password'
                                onChange={myFormik.handleChange}
                                value={myFormik.values.password}
                            />
                        </div>
                        <div className='col-lg-6 my-2'>
                            <label htmlFor='number'>Number</label>
                            <input
                                type='number'
                                className='form-control'
                                name='number'
                                onChange={myFormik.handleChange}
                                value={myFormik.values.number}
                            />
                        </div>
                        <div className='my-3'>
                            <input
                                type='submit'
                                className='btn btn-outline-success'
                            />
                        </div>
                    </div>
                </form>
            </div>
            <Toaster />
        </>
    )
}

export default CreateUser