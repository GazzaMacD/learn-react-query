import "./App.css";
import {
    Random,
    RandomErr,
    RandomUpdate,
    RandomReactQuery,
} from "./components/Random";

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
            </main>
        </div>
    );
}

export default App;
