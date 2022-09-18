import prop1 from "../assets/prop1.jpg";
import prop2 from "../assets/prop2.jpg"
const ActiveDeposits = _ =>
{
    return (
        <div>
            <div className="maindiv">
                <span className="firstth"><h1 className="headtext">Active Deposits</h1><p>2</p></span>
                <h1>+</h1>
            </div>
            <div className="tablediv">
                <table>
                    <thead>
                        <tr>
                            <th >PROPERTY</th>
                            <th>MOVE IN DATE</th>
                            <th>RENT</th>
                            <th>DEPOSITE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="firsttd"><span><img src={prop1} alt="property1" /><p>771 Lost Round</p></span></td>
                            <td>25 February 2020</td>
                            <td>$3000</td>
                            <td>$1000</td>
                            <td className="lasttd"><span><p>Awaiting Bank Processing</p><p>🟡</p></span></td>
                        </tr>
                        <tr>
                            <td className="firsttd"><span><img src={prop2} alt="property1" /><p>1491 Jagged Arbor</p></span></td>
                            <td>12 March 2020</td>
                            <td>$2300</td>
                            <td>$2000</td>
                            <td className="lasttd"><span><p>Awaiting Bank Processing</p><p>🟢</p></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="btndiv">
                <button>ALL ACTIVE DEPOSITES</button>
            </div>
        </div>
    )
};

export default ActiveDeposits;