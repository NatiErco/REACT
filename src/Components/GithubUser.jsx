import React, { useEffect, useState } from 'react';

export function GithubUser({ username }) {
	const [user, setUser] = useState(null);
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
			.then((json) => setUser(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [username]);

	return (
		<div>
			{loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			{user && (
				<div>
					<img src={user.avatar_url} alt={`${user.login} avatar`} />
					<div>Username: {user.login}</div>
					<div>Name: {user.name}</div>
				</div>
			)}
		</div>
	);
}
