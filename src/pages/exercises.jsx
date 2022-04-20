import {
  Random,
  RandomErr,
  RandomUpdate,
  RandomReactQuery,
} from '../components/Random';
import { GithubUser } from '../components/GithubUser';
import { Labels } from '../components/Labels';
import { Users } from '../components/Users';
import { QFilterData } from '../components/QFilterData';
import styles from '../page-styles/gs.module.css';

function Exercises() {
  return (
    <div className="container">
      <h1>Exercises</h1>
      <div>
        <h2>Lesson One: Why React Query</h2>
        <Random />
        <RandomErr />
        <RandomUpdate />
        <div className={styles.Spacer}></div>
        <RandomReactQuery />
      </div>
      <hr></hr>
      <div>
        <h2>First query</h2>
        <GithubUser username={'GazzaMacD'} />
      </div>
      <hr></hr>
      <div>
        <h2>Index Query</h2>
        <Labels />
      </div>
      <hr></hr>
      <div>
        <h2>Individual Records Query</h2>
        <Users />
      </div>
      <hr></hr>
      <div>
        <h2>Query Filtered Data</h2>
        <QFilterData />
      </div>
      <hr></hr>
    </div>
  );
}

export default Exercises;
