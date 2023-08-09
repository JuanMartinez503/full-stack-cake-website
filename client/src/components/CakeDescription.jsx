export default function CakeDescription({ description, title, ingredients, flavors, flavorTitle, ingredientsTitle, images }) {
    return (
      <div className="p-3 my-2">
        <h2 className="text-center">{title}</h2>
        <p className="text-center">{description}</p>
        <h3 className="text-center">{flavorTitle}</h3>
        <ul >
          {flavors.map((flavor, i) => (
            <li className="flavor-list"  key={i}> {flavor}</li>
          ))}
        </ul>
        <h3 className="text-center"> {ingredientsTitle}</h3>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li className="flavor-list" key={i}> {ingredient}</li>
          ))}
        </ul>
            <div className="img-container d-flex flex-wrap justify-content-between">
                {images.map((img,i)=>(
                    <img className="cake-comp-img" src={img} key={i} />
                ))}
            </div>
      </div>
    );
  }
  