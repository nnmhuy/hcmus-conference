export default {
	login: ({ username, password }) => {
		const request = new Request('https://backend-hcmus-conference.herokuapp.com/api/accounts/login', {
			method: 'POST',
			body: JSON.stringify({ 
				email: username, 
				password 
			}),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		});
		return fetch(request)
			.then(response => {
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(({ id }) => {
				localStorage.setItem('token', id);
				localStorage.setItem('permission', 'admin');
			});
	},
	checkError: (error) => { /* ... */ },
	checkAuth: () => {
		return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
	},
	logout: () => {
		localStorage.removeItem('token');
		return Promise.resolve();
	},
	getIdentity: (error) => { /* ... */ },
	getPermissions: () => {
		const role = localStorage.getItem('permissions');
		return role ? Promise.resolve(role) : Promise.reject();
	}
};