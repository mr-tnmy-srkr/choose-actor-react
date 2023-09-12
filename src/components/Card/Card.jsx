/* eslint-disable react/prop-types */
function Card({ data,handleAddToCart}) {
  // console.log(data);
  const { name, role, image, salary } = data;
  // console.log(image);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title">{name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur
            adipisicing.
          </p>
          <div className="flex justify-between w-full font-medium">
            <p>Salary : $ {salary}</p>
            <p>{role}</p>
          </div>
          <div className="card-actions">
            <button onClick={()=>handleAddToCart(data)} className="btn btn-primary capitalize">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
