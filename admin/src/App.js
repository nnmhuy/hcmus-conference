import * as React from "react";
import { Admin, Resource, fetchUtils } from 'react-admin';

import loopbackClient from 'react-admin-loopback';

import { SessionList, SessionEdit, SessionCreate, SessionIcon } from './component/session';
import { PresentationList, PresentationEdit, PresentationCreate } from './component/presentations';
import authProvider from './provider/authProvider'

const fetchJson = (url, options = {}) => {
	if (!options.headers) options.headers = new Headers({ Accept: 'application/json'});
	options.user = {
			authenticated: true,
			token: localStorage.getItem('token')
	};
	options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
	options.headers.set('Authorization', localStorage.getItem('token'));

	return fetchUtils.fetchJson(url, options);
};

const dataProvider = loopbackClient('https://backend-hcmus-conference.herokuapp.com/api', fetchJson)

function App() {
  return (
		<Admin title="HCMUS Admin" dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="sessions" list={SessionList} edit={SessionEdit} create={SessionCreate} icon={SessionIcon}/>
				<Resource name="presentations" list={PresentationList} edit={PresentationEdit} create={PresentationCreate}/>
    </Admin>
  );
}

export default App;
