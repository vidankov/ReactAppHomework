import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

function Carousel({ recipesData }) {
    /*
        Почему данные не гарантированы на момент рендера ImageCarousel:
        Асинхронность fetch: Запрос данных через fetch — это асинхронная операция. Это означает, что данные будут получены не сразу, а через некоторое время после того, как запрос завершится.

        Первый рендер происходит до завершения fetch: Когда компонент HomePage рендерится в первый раз, useEffect только запланирован на выполнение, но он еще не выполнился. Это значит, что на момент первого рендера recipesArray всё ещё равен своему начальному значению (undefined или [], в зависимости от того, как вы его инициализировали).

        Рендер ImageCarousel происходит до получения данных: Компонент ImageCarousel рендерится сразу после первого рендера HomePage, и на этот момент данные ещё не загружены. Поэтому recipesData в ImageCarousel будет undefined (или пустым массивом), и попытка доступа к recipesData[0] вызовет ошибку.
    */

    const [currentCarouselItem, setCurrentCarouselItem] = useState(null);

    useEffect(() => {
        // Проверяем, что recipesData существует и не пустой
        if (recipesData && recipesData.length > 0) {
            setCurrentCarouselItem(recipesData[0]);
        }
    }, [recipesData]);

    // Если данные ещё не загружены или CarouselItem ещё не установлен, показываем сообщение о загрузке
    if (!recipesData || recipesData.length === 0 || !currentCarouselItem) {
        return <div>Загрузка...</div>;
    }

    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <CarouselItem isActive={true} item={currentCarouselItem} key='ci-1' />
                <CarouselItem isActive={false} key='ci-2' />
                <CarouselItem isActive={false} key='ci-3' />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
}

export default Carousel;