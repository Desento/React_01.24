export const Button = ({ props, className, onClick, disabled }) => {
  return <button className={className} onClick={onClick} disabled={disabled}>{props}</button>

}
