import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Swal from "sweetalert2";


function Home() {
  const [data, setData] = useState([]);
  const [actorName, setActorName] = useState([]);
  const [cost, setCost] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [cartLength, setCartLength] = useState(0);
  // console.log(data);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);

  const handleAddToCart = (data) => {
    // console.log(data);
    let newCost = cost + data.salary;
    if (newCost > 30000) {
      return Swal.fire({
        title:"You don,t have enough money to purchase",
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
    } else {
      setCost(newCost);
      const newActorName = [...actorName, data.name];
      // console.log(newActorName);
      setActorName(newActorName);
      // console.log(cost);
      const remainingBalance = 30000 - newCost;
      setRemaining(remainingBalance);
      setCartLength(cartLength + 1);
    }

    //  console.log(cost+data.salary);
  };
  return (
    <div className="container flex gap-6 my-8 w-11/12 mx-auto">
      <Cards data={data} handleAddToCart={handleAddToCart}></Cards>
      <Cart
        data={data}
        actorName={actorName}
        cost={cost}
        remaining={remaining}
        cartLength={cartLength}
      ></Cart>
    </div>
  );
}

export default Home;
