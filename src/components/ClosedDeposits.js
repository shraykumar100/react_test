import prop3 from "../assets/prop3.jpg";
import prop4 from "../assets/prop4.jpg";

const ClosedDeposits = _ =>
{
    return (
        <div>
            <div className="maindiv">
                <span className="firstth"><h1 className="headtext">Closed Deposits</h1><p>8</p></span>
            </div>
            <div className="tablediv">
                <table>
                    <thead>
                        <tr>
                            <th>PROPERTY</th>
                            <th>MOVE IN DATE</th>
                            <th>RENT</th>
                            <th>DEPOSITE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="firsttd"><span><img src={prop3} alt="property1" /><p>1694 Noble Cape</p></span></td>
                            <td>3 February 2020</td>
                            <td>$3300</td>
                            <td>$3000</td>
                            <td className="lasttd"><span><p>Awaiting Bank Processing</p><p>🟢</p></span></td>
                        </tr>
                        <tr>
                            <td className="firsttd"><span><img src={prop4} alt="property1" /><p>1141 Tawny Muze</p></span></td>
                            <td>12 February 2020</td>
                            <td>$2500</td>
                            <td>$1500</td>
                            <td className="lasttd"><span><p>Expired No Payment Received</p><p>🔴</p></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <diV className="btndiv">
                <button>ALL CLOSED DEPOSITES</button>
            </diV>
        </div>
    )
};

export default ClosedDeposits;