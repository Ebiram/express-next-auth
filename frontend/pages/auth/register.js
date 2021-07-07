import { useState } from 'react'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../utils/api'
import Error from '../../components/Error'
import router from 'next/router'
import noAuth from '../../utils/noAuth'
import Notiflix from 'notiflix'

const register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirm: '' })
    const [formErrors, setFormErrors] = useState([])

    const inputHandler = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const formHandler = (e) => {
        e.preventDefault()
        Notiflix.Loading.pulse('Loading...')
        api().post('/register', formData).then(() => {
            Notiflix.Notify.success('Registered. Now login...')
            Notiflix.Loading.remove()
            router.push('/auth/login')
        }).catch(err => {
            setFormErrors(err.response.data.message)
            Notiflix.Loading.remove()
        })
    }
    return (
        <div className="mx-auto w-1/2">
            <Title title="Register" />
            <Error errors={formErrors} />
            <form onSubmit={formHandler}>
                <Input type="text" name="username" id="username" placeholder="Username" onChange={inputHandler} />
                <Input type="email" name="email" id="email" placeholder="Email" onChange={inputHandler} />
                <Input type="password" name="password" id="password" placeholder="Password" onChange={inputHandler} />
                <Input type="password" name="confirm" id="confirm" placeholder="Confirm Password" onChange={inputHandler} />
                <Button text="Register" />
            </form>
        </div>
    )
}

export default noAuth(register)
