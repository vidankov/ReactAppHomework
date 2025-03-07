function CarouselItem(props) {
    // console.log(`"id элемента ${props.item.id}, isActive: ${props.isActive}"`);
    const textShadowStyle = { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" };
    return (
        <div className={`carousel-item${props.isActive ? ' active' : ''}`}>
            {/*<CarouselItemImage title={props.item ? props.item.name : "Изображение загружается..."} />*/}
            <img src={props.item.image} className="d-block w-100" alt={props.item.name} />
            <div className=" bg-dark bg-opacity-50 rounded carousel-caption d-none d-md-block">
                <h2 style={textShadowStyle}>{props.item.name}</h2>
                <div className="fs-4 container" style={textShadowStyle}>
                    <div className="row align-items-start">
                        <ul className="col">{
                            props.item.ingredients.map((ingredient, index) =>
                                <li className="list-group-item text-start" key={`${props.item.name}-${ingredient}`}>
                                    {index + 1}) {ingredient}
                                </li>
                            )
                        }
                        </ul>
                        <ul className="col">{
                            props.item.instructions.map(instruction =>
                                <li className="list-group-item" key={`${props.item.name}-${instruction}`}>
                                    {instruction}
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;