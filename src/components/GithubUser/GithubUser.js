import { queryByAltText } from "@testing-library/react";
import * as React from "react";
import { useQuery } from "react-query";

const fetchGithubUser = (username) => {
    return window
        .fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error({
                    error: "oops, too bad",
                });
            }
            return response.json();
        });
};

export const GithubUser = ({ username }) => {
    const query = useQuery([username], () => fetchGithubUser(username));

    if (query.isLoading || query.isFetching) {
        return <p>Loading...</p>;
    } else if (query.isError) {
        return <p>{query.error.message}</p>;
    } else {
        return (
            <div>
                <img src={query.data.avatar_url} alt={query.data.login} />
                <p>{query.data.login}</p>
            </div>
        );
    }
};
