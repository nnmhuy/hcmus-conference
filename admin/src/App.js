import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { SessionList, SessionEdit, SessionCreate, SessionIcon } from './component/session';

function App() {
  return (
    <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource name="sessions" list={SessionList} edit={SessionEdit} create={SessionCreate} icon={SessionIcon}/>
    </Admin>
  );
}

export default App;
