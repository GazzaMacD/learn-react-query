import { useLabelsData } from '../../common/helpers/useLabelsData';

function Label({ label }) {
  const labelQuery = useLabelsData();
  if (labelQuery.isLoading) return null;
  const labelObj = labelQuery.data.find(
    (queryLabel) => queryLabel.id === label,
  );
  if (!labelObj) return null;
  return (
    <span key={label} className={`label ${labelObj.color}`}>
      {labelObj.name}
    </span>
  );
}

export { Label };
