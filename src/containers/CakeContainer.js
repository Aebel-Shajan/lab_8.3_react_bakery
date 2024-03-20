import Cake from "../components/Cake";

const CakeCounter = () => {

    const VictoraSponge = 
	{
		cakeName: "Victoria Sponge",
	   	ingredients: [
   			"eggs",
      		"butter",
	      	"sugar",
   		   	"self-raising flour",
      		"baking powder",
	      	"milk"
  		],
	  	price: 5,
   		rating: 5
	};
    const TeaLoaf = 
	{
 		cakeName: "Tea Loaf",
	   	ingredients: [
   			"eggs",
      		"oil",
	      	"dried fruit",
   		   	"sugar",
      		"self-raising flour",
	      	"strong tea",
  		],
	  	price: 2,
  		rating: 3
	};
	const CarrotCake = 
	{
 		cakeName: "Carrot Cake",
	   	ingredients: [
   		 	"carrots",
   	   		"walnuts",
	      	"oil",
   		   	"cream cheese",
   	   		"flour",
	      	"sugar",
   		],
	   	price: 8,
   		rating: 5
    };

    return (
		<>
		<h1>The BNTA Bakery</h1>
        <div className="cakeContainer">
            <Cake cake={VictoraSponge}/>
            <Cake cake={TeaLoaf} />
            <Cake cake={CarrotCake} />
        </div>
		</>
    );
}
 
export default CakeCounter;