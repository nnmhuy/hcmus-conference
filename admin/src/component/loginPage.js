import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const LoginPage = ({ theme }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const login = useLogin();
	const notify = useNotify();
	const submit = e => {
		e.preventDefault();
		login({ username, password }).catch(() =>
			notify('Invalid username or password')
		);
	};

	return (
		<ThemeProvider theme={createMuiTheme(defaultTheme)}>
			<form onSubmit={submit}>
					<input
						name="username"
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<input
						name="password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
			</form>
			<Notification />
		</ThemeProvider>
	);
};

export default LoginPage;