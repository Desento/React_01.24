export const Select = ({ props, className, onChange, selectedValue }) => {
  const handleSelectChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <select className={className} value={selectedValue} onChange={handleSelectChange}>
      {props.name && <option>Any {props.name}</option>}
      {!props.name && <option>Any Category</option>}

      {props.data && props.data.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
      {!props.data && props.trivia_categories.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  )
}
