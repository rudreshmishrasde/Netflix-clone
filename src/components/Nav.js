import React , {useState , useEffect} from 'react';
import './Nav.css';
function Nav() {
     const [show , handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener('scroll' , () =>{
            if(Window.scrollY > 100){
              handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener('scroll');
        };
    }, 
    []) ; 
    return (
        <div className = {`navbar ${show && 'nav_black'}`}>
            
                <img className = "nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt = "NetFlix logo"></img>
            

            
                <img className = "nav-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt = "avatar logo"></img>
            
            
        </div>
    )
}

 export default Nav
