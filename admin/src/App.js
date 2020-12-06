import * as React from "react";
import { Admin, Resource } from 'react-admin';

import loopbackClient, { authProvider } from 'react-admin-loopback';


import { Dashboard } from './component/dashboard';
import { SessionList, SessionEdit, SessionCreate, SessionIcon } from './component/session';
import { PresentationList, PresentationEdit, PresentationCreate } from './component/presentations';

function App() {
  return (
    <Admin dashboard={Dashboard} title="HCMUS Admin" dataProvider={loopbackClient('http://localhost:3000')}>
        <Resource name="sessions" list={SessionList} edit={SessionEdit} create={SessionCreate} icon={SessionIcon}/>
				<Resource name="presentations" list={PresentationList} edit={PresentationEdit} create={PresentationCreate}/>
    </Admin>
  );
}

export default App;
