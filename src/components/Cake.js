const Cake = ({cake}) => {

    const listItems = cake.ingredients.map(ingredient => <li>{ingredient}</li>);
    return (
        <div className="cake">
            <h3>{cake.cakeName}</h3>
            <p>Ingredients: </p>
            <ul>{listItems}</ul>
            <p>Price: {cake.price}</p>
            <p>Rating: {cake.rating}</p>
        </div>
    );
}
export default Cake;