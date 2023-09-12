/* eslint-disable react/prop-types */
import Card from "../Card/Card";

function Cards({ data,handleAddToCart }) {
  return (
    <div className=" w-2/3 bg-slate-300 py-6">
     <div className="grid grid-cols-2 gap-6 w-11/12 mx-auto">
     {data.map((card) => (
        <Card key={card.id} data={card} handleAddToCart={handleAddToCart}></Card>
      ))}
     </div>
    </div>
  );
}

export default Cards;
