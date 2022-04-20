import { Link } from 'react-router-dom';
import { GoIssueOpened, GoIssueClosed, GoComment } from 'react-icons/go';
import { relativeDate } from '../../common/helpers/relativeDate';
import { useUserData } from '../../common/helpers/useUserData';
import { Label } from '../Label';

function IssueItem({
  title,
  number,
  assignee,
  commentCount,
  createdBy,
  createdDate,
  labels,
  status,
}) {
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);

  return (
    <li key={createdDate}>
      <div>
        {status === 'done' || status === 'cancelled' ? (
          <GoIssueClosed style={{ color: 'red' }} />
        ) : (
          <GoIssueOpened style={{ color: 'green' }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => (
            <Label label={label} />
          ))}
        </span>
        <small>
          # {number} opened {relativeDate(createdDate)} by{' '}
          {createdByUser.isSuccess ? createdByUser.data.name : null}
        </small>
      </div>
      {assigneeUser.isSuccess && assigneeUser.data?.profilePictureUrl ? (
        <img
          src={assigneeUser.data.profilePictureUrl}
          alt={`assigned to ${assigneeUser.data.name}`}
          className="assigned-to"
        />
      ) : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}

export { IssueItem };
