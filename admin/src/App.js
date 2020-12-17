import * as React from "react";
import { Admin, Resource, fetchUtils } from 'react-admin';

import loopbackClient from 'react-admin-loopback';

import { SessionList, SessionEdit, SessionCreate } from './component/sessions';
import { PresentationList, PresentationEdit, PresentationCreate } from './component/presentations';
import { SponsorList, SponsorEdit, SponsorCreate } from './component/sponsors';
import authProvider from './provider/authProvider';

import { backendURL } from './constants/constants'

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

const dataProvider = loopbackClient(backendURL, fetchJson)

function App() {
  return (
		<Admin title="HCMUS Admin" dataProvider={dataProvider} authProvider={authProvider}>
				<Resource name="presentations" list={PresentationList} edit={PresentationEdit} create={PresentationCreate}/>
        <Resource name="sessions" list={SessionList} edit={SessionEdit} create={SessionCreate}/>
				<Resource name="sponsors" list={SponsorList} edit={SponsorEdit} create={SponsorCreate}/>
    </Admin>
  );
}

export default App;
