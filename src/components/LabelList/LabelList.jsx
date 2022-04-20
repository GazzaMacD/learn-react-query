import { useLabelsData } from '../../common/helpers/useLabelsData';

function LabelList({ selected, toggle }) {
  const labelQuery = useLabelsData();
  return (
    <div className="labels">
      <h2>Labels</h2>
      {labelQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {labelQuery.data.map((label) => (
            <li key={label.id}>
              <button
                onClick={() => toggle(label)}
                className={`label ${label.color} ${
                  selected.includes(label) ? 'selected' : ''
                }`}>
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export { LabelList };
