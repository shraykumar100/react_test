import profilepic from "../assets/profilepic.jpg";
import homeicon from "../assets/home.png";
import depositeicon from "../assets/deposite.png";
import offersicon from "../assets/offers.png"
import paymentsicon from "../assets/payments.png"
import settingsicon from "../assets/settings.png"
const Sidebar = _ =>
{
    return (
        <div className="main">
            <div  className="profilediv">
                <img className="profilepic" src={ profilepic } alt="profilepicture" />
                <h1>Shray Kumar</h1>
            </div>
            <div  className="optiondiv">
                <div>
                    <img className="sidebaricon" src={ homeicon } alt="homeicon" />
                    <h2 className="sidebaroption">Home</h2>
                </div>
                <div>
                    <img className="sidebaricon" src={depositeicon} alt="homeicon" />
                    <h2 className="sidebaroption">Deposits</h2>
                </div>
                <div>
                    <img className="sidebaricon" src={ offersicon } alt="homeicon" />
                    <h2 className="sidebaroption">Offers</h2>
                </div>
                <div>
                    <img className="sidebaricon" src={ paymentsicon } alt="homeicon" />
                    <h2 className="sidebaroption">Payments</h2>
                </div>
                <div>
                    <img className="sidebaricon" src={ settingsicon } alt="homeicon" />
                    <h2 className="sidebaroption">Settings</h2>
                </div>

            </div>
                            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
};
export default Sidebar;