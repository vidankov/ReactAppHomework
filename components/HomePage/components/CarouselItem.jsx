import CarouselItemImage from "./CarouselItemImage";

function CarouselItem(props) {
    // console.log(`"id элемента ${props.item.id}, isActive: ${props.isActive}"`);
    return (
        <div className={`carousel-item${props.isActive ? ' active' : ''}`}>
            {/*<CarouselItemImage title={props.item ? props.item.name : "Изображение загружается..."} />*/}
            <img src={props.item.image} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>Метка первого слайда</h5>
                <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
            </div>
        </div>
    );
}

export default CarouselItem;