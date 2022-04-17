import * as React from 'react';
import { useQuery } from 'react-query';

export const Random = () => {
  const [num, setNum] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    window
      .fetch(
        'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new',
      )
      .then((response) => {
        console.log('This is response', response);
        return response.text();
      })
      .then((random) => {
        setLoading(false);
        setNum(random);
      });
  }, []);

  return <p>Random number: {loading ? '...' : num}</p>;
};

export const RandomErr = () => {
  const [num, setNum] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setLoading(true);
    window
      .fetch(
        'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new',
      )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Something went wrong`);
        }
        return response.text();
      })
      .then((random) => {
        setLoading(false);
        setNum(random);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) return <p>{error}</p>;

  return <p>Random number: {loading ? '...' : num}</p>;
};

export const RandomUpdate = () => {
  const [key, forceUpdate] = React.useReducer((x) => x + 1, 0);
  const [num, setNum] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  console.log(key);

  React.useEffect(() => {
    setLoading(true);
    window
      .fetch(
        'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new',
      )
      .then((response) => {
        if (response.status !== 200) {
          return { error: 'Something went wrong. Try again' };
        }
        return response.text();
      })
      .then((random) => {
        setLoading(false);
        if (isNaN(Number(random))) {
          const errorResponse = random;
          setError(errorResponse.error);
        } else {
          setNum(random);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [key]);

  if (error) return <p>{error}</p>;

  return (
    <button onClick={forceUpdate}>
      Random number: {loading ? '...' : num}
    </button>
  );
};

const fetchNumber = () => {
  return window
    .fetch(
      'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new',
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Oops, something went wrong, please try again.');
      }
      return response.text();
    });
};

export const RandomReactQuery = () => {
  const query = useQuery(['random'], fetchNumber);

  if (query.isError) return <p>{query.error.message}</p>;

  return (
    <button onClick={() => query.refetch()}>
      Random number: {query.isLoading || query.isFetching ? '...' : query.data}
    </button>
  );
};
