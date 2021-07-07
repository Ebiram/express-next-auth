import router from 'next/router'
import Cookies from 'js-cookie'
import cookie from 'cookie'
import api from './api'

export const isLoggedIn = (reqCookies = null) => {
    if (!reqCookies) {
        return !!Cookies.get('my_app_is_user_logged_in')
    }

    return !!cookie.parse(reqCookies).my_app_is_user_logged_in
}

export const logUserIn = () => {
    Cookies.set('my_app_is_user_logged_in', true, { expires: 7, sameSite: 'lax' })
    router.push('/')
}

export const logOut = () => {
    if (typeof window !== 'undefined') {
        Cookies.remove('my_app_is_user_logged_in')
        api().post('/logout').then(() => {
            router.push('/auth/login')
        })
    }
}