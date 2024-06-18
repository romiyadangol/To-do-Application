import '../assets/css/header.css'
function Header(props){
    return(
        <header className="main-header">
            <h1>{props.title}</h1>
        </header>
    )
}
export default Header;