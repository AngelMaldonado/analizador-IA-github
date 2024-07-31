export type InputProps = {
  icono: React.ReactElement,
  placeholder: string,
  title: string,
  type: string,
  name: string,
  id: string
}

export default function Input(props: InputProps) {
  return (
    <div className="input-wrapper">
      <input title={props.title} type={props.type} name={props.name} id={props.id} />
      {props.icono}
    </div>
  )
}
