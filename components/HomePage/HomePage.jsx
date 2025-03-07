import Footer from "../Footer/Footer";
import Header from "../Header/Header";
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
        <section className="container">
            <Header />
            <h1 className="text-center">Рецепты блюд на любой вкус!</h1>
            <Carousel recipesData={recipesArray} />
            <Footer />
        </section>
  );
}

export default HomePage;