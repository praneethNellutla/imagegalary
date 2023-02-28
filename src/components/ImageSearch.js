import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState("")
    const onSubmit = (e) =>{
        e.preventDefault()
        searchText(text)
    }
  return (
    <div className='max-w-sm rounded overflow-hidden my-5 mx-auto shadow-2xl'>
        <form className='w-full max-w-sm' onSubmit={onSubmit}>
            <div className='bg-grey-500 p-4 flex flex-row justify-center items-center border-b-2 '>
                <input onChange={e => setText((e.target.value))} className='appearance-none bg-transparent border-none w-full leading-tight text-grey-700 mr-3 py-1 px-2 focus:outline-none' type="text" placeholder='Search Image Term...'/>
                <button type="submit" className='bg-teal-500 px-2 py-1 border-4 rounded text-white border-teal-500 hover:bg-teal-700 hover:border-teal-700'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch
