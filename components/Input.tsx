"use client"
import "./Input.css"

export type InputProps = {
  required?: boolean,
  onEnter?: (args: any) => void,
  icon: React.ReactElement,
  placeholder: string,
  title: string,
  type: string,
  name: string,
  id: string
}

export default function Input(props: InputProps) {
  const { icon, onEnter, ...inputProps } = props

  return (
    <div className="input-wrapper">
      <input {...inputProps}
        onKeyDown={(e) => {
          if (onEnter && e.key === "Enter") {
            onEnter((e.target as HTMLInputElement).value)
          }
        }}
      />
      {icon}
    </div>
  )
}
