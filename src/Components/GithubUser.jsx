

import React, { useEffect, useState } from 'react';

export function GithubUser({ username }) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.github.com/users/${username}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then((json) => setData(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [username]);

	return (
		<div>
			{loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			{data && (
				<div>
					<img src={data.avatar_url} alt={`${data.login} avatar`} />
					<div>Username: {data.login}</div>
					<div>Name: {data.name}</div>
				</div>
			)}
		</div>
	);
}
