import { useQuery } from 'react-query';

function useLabelsData() {
  const labelsQuery = useQuery(['labels'], () =>
    fetch('/api/labels').then((res) => res.json()),
  );
  return labelsQuery;
}

export { useLabelsData };
