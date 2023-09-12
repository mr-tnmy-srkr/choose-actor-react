import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";

function Home() {
  const [data, setData] = useState([]);
  const [actorName, setActorName] = useState([]);
//   const[cost,setCost] =useState()

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);

  const handleAddToCart = (data) => {
    // console.log("from cart");
    const newActorName = [...actorName, data.name];
    // console.log(newActorName);
    setActorName(newActorName);

    // setCost(data.salary);
  };
// console.log(cost);
  return (
    <div className="container flex gap-6 my-8 w-11/12 mx-auto">
      <Cards data={data} handleAddToCart={handleAddToCart}></Cards>
      <Cart data={data} actorName={actorName}></Cart>
    </div>
  );
}

export default Home;
