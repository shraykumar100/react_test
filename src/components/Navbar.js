import emailicon from "../assets/email.png"
import profilepic from "../assets/profilepic.jpg";
const Navbar = _ =>
{
    return (
        <div className="navdiv">
            <img className="emailicon" src={ emailicon } />
            <img className="profileicon" src={ profilepic } alt="profilepicture" />
        </div>
    )
};

export default Navbar;