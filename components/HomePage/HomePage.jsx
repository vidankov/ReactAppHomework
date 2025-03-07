import Carousel from "./components/Carousel";
import { useEffect, useState } from 'react';

const photosDbConnectionURL = 'https://dummyjson.com/recipes';

function HomePage() {
    const [recipesArray, setRecipesArray] = useState([]);

    useEffect(() => {
        fetch(photosDbConnectionURL)
            .then(response => response.json())
            .then(data => setRecipesArray(data.recipes))
            .catch(error => console.error(error));
    }, []);

    return (
        <Carousel recipesData={recipesArray} />
  );
}

export default HomePage;