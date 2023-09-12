/* eslint-disable react/prop-types */
function Cart({ data, actorName }) {
  let count = 0;
  return (
    <div className="w-1/3 bg-red-100 text-center ">
      <h1 className="text-3xl font-semibold py-6 underline">Cart</h1>
      <h3 className="text-2xl font-medium pb-6">Cart Length : {data.length}</h3>
      <h4 className="text-2xl font-medium ">Total Budget : $ 30,000</h4>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <p className="text-xl pb-4">Remaining : </p>
      <p className="text-xl pb-4">Total cost : </p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div>
        <h1 className="text-2xl underline">Actors Name</h1>
        {actorName.map((item, idx) => (
          <ol key={idx} className="my-3">
            <li className="text-2xl">
              {(count += 1)}). {item}
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
}

export default Cart;
