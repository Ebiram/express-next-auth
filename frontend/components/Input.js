import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input className="outline-none bg-white text-md rounded-md shadow-sm border border-gray-200 py-3 px-5 mb-5 w-full hover:border-violet-200 focus:border-violet-400" {...props} />
        </div>
    )
}

export default Input
