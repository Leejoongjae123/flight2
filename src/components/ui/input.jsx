import { cn } from '@/src/lib/utils'
import React from 'react'

const Input = ({ type, placeholder, className, props,onChange }) => {
    return (
        <input onChange={onChange} {...props} type={type} placeholder={placeholder} name={type} required className={cn(`border border-primary rounded-lg px-[25px] py-[18px] max-h-12.5 w-auto outline-blue-200 bg-background`, className)} />
    )
}

export default Input