import * as React from 'react';
import { IssuesList } from '../components/IssuesList';
import { LabelList } from '../components/LabelList';

function Issues() {
  const [labels, setLabels] = React.useState([]);

  function toggleLabels(label) {
    setLabels((currentLabels) => {
      if (currentLabels.includes(label)) {
        return currentLabels.filter((currentLabel) => currentLabel !== label);
      } else {
        return currentLabels.concat(label);
      }
    });
  }

  return (
    <div className="container">
      <h1>Issue Tracker</h1>
      <main>
        <section>
          <h2>Issues</h2>
          <IssuesList labels={labels} />
        </section>
        <aside>
          <LabelList selected={labels} toggle={toggleLabels} />
        </aside>
      </main>
    </div>
  );
}

export default Issues;
