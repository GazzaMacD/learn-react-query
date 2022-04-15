import "./App.css";
import {
    Random,
    RandomErr,
    RandomUpdate,
    RandomReactQuery,
} from "./components/Random";
import { GithubUser } from "./components/GithubUser";

function App() {
    return (
        <div className="App">
            <header className="App-header">Learn React Query</header>
            <main>
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
        </div>
    );
}

export default App;
