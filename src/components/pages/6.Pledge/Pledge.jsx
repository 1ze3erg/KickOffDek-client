import YourDetail from "./YourDetail";
import YourPayment from "./YourPayment";
import YourPledge from "./YourPledge";
import YourShippingAddress from "./YourShippingAddress";
import YourSummary from "./YourSummary";

function Pledge() {
    return (
        <div>
            <h1>Pledge</h1>
            <YourPledge />
            <YourDetail />
            <YourPayment />
            <YourShippingAddress />
            <YourSummary />
        </div>
    );
}

export default Pledge;
