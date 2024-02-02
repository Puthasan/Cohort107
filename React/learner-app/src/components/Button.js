import './Button.css'

function Button({children, type, onClick}) {

  return (
    <button 
      onClick={onClick} 
      type={type} 
      className="btn">
        {children}
    </button>)

}

export default Button