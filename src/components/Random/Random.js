import * as React from "react";

export const Random = () => {
    const [num, setNum] = React.useState();

    React.useEffect(() => {
        fetch(
            "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
        )
            .then((response) => response.text())
            .then((random) => {
                setNum(random);
            });
    }, []);

    return <p>Random number: {num}</p>;
};
