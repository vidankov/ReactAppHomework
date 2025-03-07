import CarouselItemImage from "./CarouselItemImage";

function CarouselItem(props) {
    return (
        <div className={`carousel-item${props.isActive ? ' active' : ''}`}>
            <CarouselItemImage />
            <div className="carousel-caption d-none d-md-block">
                <h5>Метка первого слайда</h5>
                <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
            </div>
        </div>
    );
}

export default CarouselItem;