import * as React from 'react';
import { useQuery } from 'react-query';
import styles from './QFilterData.module.css';

/**
 * For this practice, you'll be querying two APIs.
 * First, query the
 *
 * `https://ui.dev/api/courses/react-query/labels`
 *
 * API and create a button for each label in a list.
 * When you click on one of these labels, it should
 * make a query to the
 *
 * `https://ui.dev/api/courses/react-query/issues`
 *
 * API and return a list of issues that have that label.
 *
 * Example: `https://ui.dev/api/courses/react-query/issues?labels[]=bug`
 *
 * Remember, React Query is declarative. Think about how
 * you will let React Query know that it needs to query the
 * issues API when the user clicks on a label. It might also
 * help to think about what the issues API query key is.
 *
 * Hint: This is a form of dependent query.
 */

function useIssues(labelName) {
  const url = `https://ui.dev/api/courses/react-query/issues?labels[]=${labelName}`;
  console.log(url);
  const issuesQuery = useQuery(
    ['labels', labelName],
    () => fetch(url).then((resp) => resp.json()),
    {
      enabled: Boolean(labelName),
    },
  );
  return issuesQuery;
}

function QFilterData() {
  const [labelName, setLabelName] = React.useState(null);
  const labelsQuery = useQuery(['labels'], () =>
    fetch(`https://ui.dev/api/courses/react-query/labels`).then((resp) =>
      resp.json(),
    ),
  );
  const issuesQuery = useIssues(labelName);
  console.log(`issuesQuery with ${labelName} `, issuesQuery);

  return (
    <div>
      <h3>Labels</h3>
      {labelsQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.Labels}>
          {labelsQuery.data.map((label) => (
            <li key={label.id}>
              <button
                style={{
                  fontWeight: label.name === labelName ? 'bold' : 'normal',
                  backgroundColor: label.color,
                  boxShadow:
                    label.name === labelName
                      ? '0px 0px 3px 2px #FBFF18'
                      : 'none',
                }}
                onClick={() => setLabelName(label.name)}>
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Issues</h3>
      {issuesQuery.isIdle ? null : issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.Issues}>
          {issuesQuery.data.map((issue) => (
            <li key={issue.id}>{issue.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { QFilterData };
