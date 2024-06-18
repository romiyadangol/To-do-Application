import '../assets/css/button.css'
function Button(props){
    return(
        <div>
            <button 
                className="btn"
                name={props.name}
                onClick={props.onclick}
            >
            {props.label}
            </button>
        </div>
    )
}
export default Button;