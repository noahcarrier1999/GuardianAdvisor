import logo from "../assets/Small Horizontal Logo No Background.png"

function Header(){
    return(
        <>
            <div className="header">
                <img src={logo} className="logo"/>
            </div>
        </>
        
    )
    
}

export default Header