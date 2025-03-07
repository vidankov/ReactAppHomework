import CarouselItem from "./CarouselItem";

function Carousel({ recipesData }) {
    if (!recipesData || recipesData.length == 0) {
        return <div>Загрузка...</div>;
    }

    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner"> {
                recipesData.map((element, index) =>
                    <CarouselItem isActive={index == 0} item={element} key={`cItem-${index + 1}`} />
                )
            }
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