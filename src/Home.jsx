
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";

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
      return alert("You don't have enough money to buy");
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
