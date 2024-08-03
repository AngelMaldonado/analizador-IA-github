"use client"
import "./Input.css"

export type InputProps = {
  required?: boolean,
  error?: string,
  icon: React.ReactElement,
  placeholder: string,
  title: string,
  type: string,
  name: string,
  id: string
}

export default function Input(props: InputProps) {
  const { icon, error, ...inputProps } = props

  return (
    <div className="input-wrapper">
      <input {...inputProps} />
      {icon}
      <span aria-hidden={!error} hidden={!error}>{error}</span>
    </div>
  )
}
