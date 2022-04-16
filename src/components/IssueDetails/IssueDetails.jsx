import { useParams } from "react-router-dom";

function IssueDetails() {
    const { number } = useParams();

    return <h1>Issue {number}</h1>;
}

export { IssueDetails };
