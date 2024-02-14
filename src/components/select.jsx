export const Select = ({ props, className }) => {
  const onChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <select className={className} name={props.name} id={props.id} onChange={onChange}>
      <option>Any {props.name}</option>
      {props.data.map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  )
}
