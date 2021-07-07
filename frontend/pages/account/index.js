import { useState, useEffect } from 'react'
import Link from 'next/link'
import withAuth from '../../utils/withAuth'
import api from '../../utils/api'
import Title from '../../components/Title'
import Error from '../../components/Error'
import Notiflix from 'notiflix'

const account = () => {
    const [user, setUser] = useState([])
    const [fetchErrors, setFetchErrors] = useState([])

    useEffect(() => {
        Notiflix.Loading.pulse('Loading...')
        api().get('/account').then(response => {
            Notiflix.Loading.remove();
            setUser(response.data)
        }).catch(err => {
            setFetchErrors(err)
        })
    }, [])



    return (
        <div>
            <Title title="Account" />
            <Error errors={fetchErrors} />
            <div className="mx-auto w-1/2 text-center">
                <div className="bg-gradient-to-tr from-blue-500 to-violet-500 text-white py-5 px-6 rounded-md">
                    <div className="font-bold text-3xl">{user.username}</div>
                    <div className="font-light mt-6">{user.email}</div>
                </div>
                <div className="my-10">
                    <Link href="/account/change-password">Change Password</Link>
                </div>
            </div>
        </div>
    )
}

export default withAuth(account)
