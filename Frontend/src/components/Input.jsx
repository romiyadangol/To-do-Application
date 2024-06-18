import '../assets/css/input.css'
function Input(props){
    return(
        <div>
            <input 
            className='input'
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onchange}
            />
        </div>
    )
}
export default Input;