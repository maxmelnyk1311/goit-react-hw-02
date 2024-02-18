import ClickCounterBtn from "./ClickCounterBtn/ClickCounterBtn.jsx";
import css from './Options.module.css';

export default function Options({feedbacks, onUpdate, onReset, totalFeedbacks}) {
    const keys = Object.keys(feedbacks);
    return (
        <ul className={css.optionsList}>
            <ClickCounterBtn clickHandler={() => onUpdate(keys[0])}>Good</ClickCounterBtn>
            <ClickCounterBtn clickHandler={() => onUpdate(keys[1])}>Neutral</ClickCounterBtn>
            <ClickCounterBtn clickHandler={() => onUpdate(keys[2])}>Bad</ClickCounterBtn>
            {totalFeedbacks > 0 && 
                <ClickCounterBtn clickHandler={onReset}>Reset</ClickCounterBtn>
            }
        </ul>
    )
}