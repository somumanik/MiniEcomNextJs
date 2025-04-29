"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProductDetails() {
    // let paramData = useParams()
    // console.log(paramData) //Object ----  {pid:1}
    // ab ise uper useParams() mein destructre kar lenge

    let { pid } = useParams()
    let [singleProduct, setSingleProduct] = useState(null)

    let paramData = () => {
        axios.get(`https://dummyjson.com/products/${pid}`)
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes)
                setSingleProduct(finalRes)
            })
    }
    useEffect(() => {
        paramData()
    }, [pid])

    return (
        <div>
            {
                singleProduct != null
                    ?
                    <div className='max-w-[1320px] mx-auto mt-5 grid grid-cols-2 items-center'>
                        <div className='shadow-lg '>
                            <img className='w-[75%]' src={singleProduct.thumbnail} alt="" />
                        </div>
                        <div className='shadow-lg text-center '>
                            <h2 className='uppercase mt-3'>{singleProduct.category}</h2>
                            <p>{singleProduct.title}</p>
                            <p>Rs.{singleProduct.price}</p>
                        </div>
                    </div>

                    :

                    <div className='max-w-[1320px] mx-auto flex justify-center items-center h-100'>
                        <div className='ms-24 '>
                            <div className=" w-12 h-12 rounded-full animate-spin
                                border-x-4 border-solid border-purple-600 border-t-transparent">
                            </div>
                            <p>Loading.....</p>
                        </div>
                    </div>
            }
        </div>
    )
}
