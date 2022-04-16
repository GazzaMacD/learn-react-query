import { IssuesList } from '../components/IssuesList';
import { LabelList } from '../components/LabelList';

function Issues() {
  return (
    <div className="container">
      <h1>Issue Tracker</h1>
      <main>
        <section>
          <h2>Issues</h2>
          <IssuesList />
        </section>
        <aside>
          <LabelList />
        </aside>
      </main>
    </div>
  );
}

export default Issues;
