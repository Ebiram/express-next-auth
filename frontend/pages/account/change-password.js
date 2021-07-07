import { useState } from 'react'
import router from 'next/router'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../utils/api'
import Error from '../../components/Error'
import withAuth from '../../utils/withAuth'
import Notiflix from 'notiflix'

const changePassword = () => {
    const [formData, setFormData] = useState({ password: '', confirm: '' })
    const [formErrors, setFormErrors] = useState([])

    const inputHandler = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const formHandler = (e) => {
        e.preventDefault()
        Notiflix.Loading.pulse('Loading...')
        api().post('/change-password', formData).then(() => {
            Notiflix.Notify.success('Password changed')
            Notiflix.Loading.remove()
            router.push('/account')
        }).catch(err => {
            setFormErrors(err.response.data.message)
            Notiflix.Loading.remove()
        })
    }
    return (
        <div className="mx-auto w-1/2">
            <Title title="Change Password" />
            <Error errors={formErrors} />
            <form onSubmit={formHandler}>
                <Input type="password" name="password" id="password" placeholder="Password" onChange={inputHandler} />
                <Input type="password" name="confirm" id="confirm" placeholder="Confirm" onChange={inputHandler} />
                <Button text="Change Password" />
            </form>
        </div>
    )
}

export default withAuth(changePassword)
