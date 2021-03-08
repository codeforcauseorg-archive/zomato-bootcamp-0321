
import { useEffect, useState } from "react";
import Chips from "../componenets/OrderPageComponent/Chips";
// import Cuisines from '../componenets/Cuisines'
// import { LocationOnOutlined } from '@material-ui/icons';
import Header from "../componenets/OrderPageComponent/Header";
import StripeButton from "../componenets/stripe";
import axios from "../utils/axios";
import Hotel from "../componenets/Hotel"

// const useStyles = makeStyles(() => ({
//   toolbar: {
//     backgroundColor: '#fff'
//   }
// }))

function OrderPage() {
  let [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/hotels").then((res) => {
      setHotels(res.data);
      // console.log(res);
    });
  }, []);

  return (
    <div>
      <Header />
      <Chips />
      <StripeButton price={100} />

      {hotels.map((hotel, index) => (
        <Hotel key={index} hotel={hotel} />
      ))}
    </div>
  );
}

export default OrderPage;
