export default function Feedback({feedbacks, totalFeedbacks, positiveFeedbacks}) {
    return (
        <ul>
            <li>
                <p>Good: {feedbacks.good}</p>
            </li>
            <li>
                <p>Neutral: {feedbacks.neutral}</p>
            </li>
            <li>
                <p>Bad: {feedbacks.bad}</p>
            </li>
            <li>
                <p>Total: {totalFeedbacks}</p>
            </li>
            <li>
                <p>Positive: {positiveFeedbacks}%</p>
            </li>
        </ul>
    )
}