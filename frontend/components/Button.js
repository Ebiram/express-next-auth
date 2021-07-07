import React from 'react'

const Button = ({ text }) => {
    return (
        <div>
            <button className="bg-gradient-to-tr from-blue-500 to-violet-500 text-md text-white font-bold rounded-md py-3 px-5 w-full hover:bg-gradient-to-tr hover:from-blue-600 hover:to-violet-600">{text}</button>
        </div>
    )
}

export default Button
