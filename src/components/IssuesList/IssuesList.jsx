import { useQuery } from 'react-query';
import { IssueItem } from '../IssueItem';

function IssuesList({ labels }) {
  const issuesQuery = useQuery(['issues', { labels }], () => {
    const labelsString = labels
      .map((label) => `labels[]=${label.name}`)
      .join('&');
    console.log(labelsString);
    return fetch(`/api/issues?${labelsString}`).then((res) => res.json());
  });
  return (
    <div>
      <h3>Issues List</h3>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {issuesQuery.data.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              commentCount={issue.comments.length}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
              labels={issue.labels}
              status={issue.status}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
export { IssuesList };
