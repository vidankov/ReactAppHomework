function CarouselItemImage({ title }) {
    /*
        Для генерации фонов:
        https://dummyjson.com/image/400x200/008080/{код цвета}?text={текст}+{текст},
        например:
        https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter
    */

    const [imgSource, setImgSource] = useState(null);

    if (!imgSource) {
        return <div>Изображение загружается...</div>
    }

    return (
        <img src="https://loremflickr.com/1280/720" className="d-block w-100" alt="..." />
    );
}

export default CarouselItemImage;