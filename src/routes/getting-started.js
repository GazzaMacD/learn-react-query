import {
    Random,
    RandomErr,
    RandomUpdate,
    RandomReactQuery,
} from "../components/Random";
import { GithubUser } from "../components/GithubUser";

function GettingStarted() {
    return (
        <main>
            <h1>Getting Started</h1>
            <div>
                <h2>Lesson One: Why React Query</h2>
                <Random />
                <RandomErr />
                <RandomUpdate />
                <br></br>
                <RandomReactQuery />
            </div>
            <hr></hr>
            <div>
                <h2>Lesson Two: First query</h2>
                <GithubUser username={"GazzaMacD"} />
            </div>
        </main>
    );
}

export default GettingStarted;
