import { useEffect, useState } from "react";

function GenerateRandomColor() {
    const generateHexRGB = () =>
        Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let result = "";
    for (let i = 0; i < 3; i++) {
        result = `${result}${generateHexRGB()}`
    };
    console.log(`Hex-код сгенерированного фона CarouselItemImage: ${result}`);
    return result;
}

function CarouselItemImage({ title }) {
    /*
        Для генерации фонов:
        https://dummyjson.com/image/400x200/{код цвета фона}/{код цвета текста}?text={текст}+{текст}
        например:
        https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter
    */

    const [imgSource, setImgSource] = useState(null);

    useEffect(() => {
        if (title) {
            const encodedTitle = encodeURIComponent(title);
            const color = GenerateRandomColor();
            setImgSource(`https://dummyjson.com/image/1280x720/${color}/ffffff?text=${encodedTitle}`);
        }
    }, [title]);

    if (!imgSource) {
        return <img
            src="../../../src/assets/template_1280x720.png"
            className="d-block w-100"
            alt="Изображение загружается..."
        />
    }

    return (
        <img src={imgSource} className="d-block w-100" alt="..." />
    );
}

export default CarouselItemImage;