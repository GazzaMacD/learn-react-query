import {
  Random,
  RandomErr,
  RandomUpdate,
  RandomReactQuery,
} from '../components/Random';
import { GithubUser } from '../components/GithubUser';
import styles from '../page-styles/gs.module.css';

function GettingStarted() {
  return (
    <main>
      <div className={styles.Wrapper}>
        <h1>Getting Started</h1>
        <div className="container">
          <h2>Lesson One: Why React Query</h2>
          <Random />
          <RandomErr />
          <RandomUpdate />
          <div className={styles.Spacer}></div>
          <RandomReactQuery />
        </div>
        <hr></hr>
        <div className="container">
          <h2>Lesson Two: First query</h2>
          <GithubUser username={'GazzaMacD'} />
        </div>
      </div>
    </main>
  );
}

export default GettingStarted;
