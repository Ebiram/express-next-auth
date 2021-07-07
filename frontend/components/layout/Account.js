import { useState, useEffect } from 'react'
import Link from 'next/link'
import { isLoggedIn, logOut } from '../../utils/auth'
import Notiflix from 'notiflix'

const Account = () => {
    const [hasSession, setHasSession] = useState(false)

    useEffect(() => {
        if (isLoggedIn()) {
            setHasSession(true)
        }
        else {
            setHasSession(false)
        }
    }, [isLoggedIn()])

    const logUserOut = (e) => {
        e.preventDefault()
        Notiflix.Loading.pulse('Loading...')
        if (hasSession) {
            Notiflix.Loading.remove()
            Notiflix.Notify.success('Logged out. Come back soon!')
            logOut()
        }
    }

    if (hasSession) {
        return (
            <div className="flex">
                <Link href="/account"><a className="block py-2 px-5 rounded-full hover:text-white hover:bg-blue-600">Account</a></Link>
                <a href="/" onClick={logUserOut} className="block bg-red-500 py-2 rounded-full px-5 text-md ml-2 hover:text-white hover:bg-red-700">Logout</a>
            </div>
        )
    }
    return (
        <div className="flex">
            <Link href="/auth/register"><a className="block py-2 px-5 rounded-full hover:text-white hover:bg-blue-600">Register</a></Link>
            <Link href="/auth/login"><a className="block py-2 px-5 rounded-full hover:text-white hover:bg-blue-600">Login</a></Link>
        </div>
    )
}

export default Account