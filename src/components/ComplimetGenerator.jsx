import {useEffect, useState} from "react";
import complimentsData from "../data/compliments.json";

const ComplimentGenerator = () => {
    const [currentCompliment, setCurrentCompliment] = useState(" ");
    const [usedCompliments, setUsedCompliments] = useState([])
    const [compliments, setCompliments] = useState([])
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setCompliments(complimentsData)
    }, [])

    const generateCompliment = () => {
        if (isAnimating || compliments.length === 0) return;

        setIsAnimating(true);

        // Сначала плавно исчезает текущий текст
        setTimeout(() => {
            if (usedCompliments.length === compliments.length) {
                setUsedCompliments([]);
                setCurrentCompliment("Вы дошли до конца этого списка! В конце, от себя, хотел бы сказать, что вы стали для меня не только самым лучшим преподавателем, но и другом.");
            } else {
                let randomIdx;
                do {
                    randomIdx = Math.floor(Math.random() * compliments.length);
                } while (usedCompliments.includes(randomIdx));

                setUsedCompliments([...usedCompliments, randomIdx]);
                setCurrentCompliment(compliments[randomIdx]);
            }

            // После смены текста снимаем класс анимации
            setTimeout(() => setIsAnimating(false), 10);
        }, 400); // Должно совпадать с длительностью fadeOut
    };

    return (
        <div className="compliment-container">
            <button onClick={generateCompliment}>Комплиментик?</button>
            <p className={isAnimating ? "fade-out" : ""}>
                {currentCompliment}
            </p>
            <span style={{ fontSize: "2rem"}}>
                {compliments.length - usedCompliments.length}
            </span>
        </div>
    )
}

export default ComplimentGenerator