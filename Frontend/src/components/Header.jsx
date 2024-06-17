export default function Header(props){
    return(
        <>
           <div>
                <header className="main-header">
                    <h1>{props.title}</h1>
                </header>
            </div> 
        </>
    );
}