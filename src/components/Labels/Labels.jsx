import { useQuery } from 'react-query';

function Labels() {
  const labelQuery = useQuery(['labels'], () =>
    fetch('https://ui.dev/api/courses/react-query/labels').then((response) =>
      response.json(),
    ),
  );
  if (labelQuery.isError) return <p>{labelQuery.error.message}</p>;
  return (
    <div>
      <h1>Labels</h1>
      <ul>
        {labelQuery.isLoading || labelQuery.isFetching ? (
          <p>Loading...</p>
        ) : (
          labelQuery.data.map((label) => (
            <li key={label.id} style={{ color: label.color }}>
              <span style={{ color: 'white' }}>{label.name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export { Labels };
