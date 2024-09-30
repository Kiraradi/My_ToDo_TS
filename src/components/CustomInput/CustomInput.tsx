import React from 'react';

interface ICustomInput {
  onChange: (event:React.FormEvent<HTMLInputElement>) => void
  value: string
  className: string
  placeholder?: string
}

const CustomInput:React.FC<ICustomInput> = (props) => {
  return (
    <input onChange={props.onChange} value={props.value} className={props.className} placeholder={props.placeholder} />
  )
}

export default CustomInput;
