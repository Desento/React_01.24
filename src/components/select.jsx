export const Select = ({ props }) => {
    return (
        <select name={props.name} id={props.id}>
            <option >Any {props.name}</option>
            {props.data.map((item) => (
                <option key={item.id} value={item.name}>{item.name}</option>
            ))}
        </select>
    )
}