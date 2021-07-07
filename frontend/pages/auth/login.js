import { useState } from 'react'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../utils/api'
import Error from '../../components/Error'
import { logUserIn } from '../../utils/auth'
import noAuth from '../../utils/noAuth'
import Notiflix from 'notiflix'

const login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' })
    const [formErrors, setFormErrors] = useState()

    const inputHandler = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const formHandler = (e) => {
        e.preventDefault()
        Notiflix.Loading.pulse('Loading...')
        api().post('/login', formData).then(() => {
            Notiflix.Notify.success('Logged in...')
            Notiflix.Loading.remove()
            logUserIn()
        }).catch(err => {
            let res = ''
            if (err.response.status === 401) {
                res = 'You are not authorized to login. Maybe your not registered or your login credentials are wrong.'
            }
            else {
                res = err.response.data.message
            }
            setFormErrors(res)
            Notiflix.Loading.remove()
        })
    }
    return (
        <div className="mx-auto w-1/2">
            <Title title="Login" />
            <Error errors={formErrors} />
            <form onSubmit={formHandler}>
                <Input type="text" name="username" id="username" placeholder="Username" onChange={inputHandler} />
                <Input type="password" name="password" id="password" placeholder="Password" onChange={inputHandler} />
                <Button text="Login" />
            </form>
        </div>
    )
}

export default noAuth(login)
