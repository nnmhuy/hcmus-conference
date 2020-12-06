import * as React from "react";
import { Admin, Resource } from 'react-admin';

import loopbackClient, { authProvider } from 'react-admin-loopback';


import { Dashboard } from './component/dashboard';
import { SessionList, SessionEdit, SessionCreate, SessionIcon } from './component/session';
import { PresentationList, PresentationEdit, PresentationCreate } from './component/presentations';
import LoginPage from './component/loginPage'
// import authProvider from './provider/authProvider'

function App() {
  return (
		<Admin loginPage={LoginPage} dashboard={Dashboard} title="HCMUS Admin" dataProvider={loopbackClient('http://localhost:3000')} authProvider={authProvider('http://localhost:3000/users/login')}>
        <Resource name="sessions" list={SessionList} edit={SessionEdit} create={SessionCreate} icon={SessionIcon}/>
				<Resource name="presentations" list={PresentationList} edit={PresentationEdit} create={PresentationCreate}/>
    </Admin>
  );
}

export default App;
