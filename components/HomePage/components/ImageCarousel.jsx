import { useEffect, useState } from "react";

function ImageCarousel({ recipesData }) {
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
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://loremflickr.com/1280/720" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Метка первого слайда</h5>
                        <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://loremflickr.com/1280/720" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Метка второго слайда</h5>
                        <p>Некоторый репрезентативный заполнитель для второго слайда.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://loremflickr.com/1280/720" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Метка третьего слайда</h5>
                        <p>Некоторый репрезентативный заполнитель для третьего слайда.</p>
                    </div>
                </div>
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

export default ImageCarousel;