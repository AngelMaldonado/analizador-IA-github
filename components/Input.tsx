"use client"
import "./Input.css"

export type InputProps = {
  onEnter?: () => void,
  icono: React.ReactElement,
  placeholder: string,
  title: string,
  type: string,
  name: string,
  id: string
}

export default function Input(props: InputProps) {
  const { icono, onEnter, ...inputProps } = props

  return (
    <div className="input-wrapper">
      <input {...inputProps}
        onKeyDown={(e) => {
          if (onEnter && e.key === "Enter") {
            onEnter()
          }
        }}
      />
      {icono}
    </div>
  )
}
