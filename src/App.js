import ActiveDeposits from "./components/ActiveDeposits";
import ClosedDeposits from "./components/ClosedDeposits";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App ()
{
  return (
    <div>
      <Sidebar />
      <Navbar />
      <ActiveDeposits />
      <ClosedDeposits/>
    </div>
  );
}

export default App;
