import CreateReview from "./CreateReview.jsx";
export default function CakeDescription({ description, title, ingredients, flavors, flavorTitle, images , price ,pageNumber}) {
    return (
      <div className="p-2 my-2">
        <h2 className="text-center comp-title">{title}</h2>
        <p className="text-center comp-desc">{description}</p>
        <h3 className=" my-5 comp-price">Precio: {price}</h3>
        <ul className="comp-ul">
        <h3 >{flavorTitle}</h3>

          {flavors.map((flavor, i) => (
            <li className="flavor-list"  key={i}> {flavor}</li>
          ))}
        </ul>
        <ul className="comp-ul">
        <h3 className=" mt-5">Toppings!</h3>

          {ingredients.map((ingredient, i) => (
            <li className="flavor-list" key={i}> {ingredient}</li>
          ))}
        </ul>
            <div className="img-container d-flex flex-wrap justify-content-between my-3">
                {images.map((img,i)=>(
                    <img className="cake-comp-img" src={img} key={i} />
                ))}
            </div>
            <div>
                    <CreateReview pageNumber={pageNumber}/>
            </div>
      </div>
    );
  }
  