import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(null);
  const BASE_URL =
  "https://react-http-7e4a5-default-rtdb.firebaseio.com/meals.json"

   useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(BASE_URL, {});
      if (!response.ok) {
        console.log("Error occured");
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      setMeals(responseData);
      setIsLoading(false);
    };

   
    fetchMeals().catch (error => {
      console.log("into catch");
      setIsLoading(false);
      setIsError(error.message);
    })
  }, []);

 
  if (isLoading){
    return (
      <section className={classes.mealsLoading}>
        <div className="loader center">
          <i className="fa fa-cog fa-spin" />
        </div>
      </section>
    );
  }

    if (error) {
      return (
        <section className={classes.mealsError}>
          <p>{error}</p>
        </section>
      );
    }


  const mealsList = meals.map((meal) => (
    <MealItem
      price={meal.price}
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
    />
  )); 

  

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
