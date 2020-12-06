import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const SessionIcon = BookIcon;

export const SessionList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="start_date" />
            <DateField source="end_date" />
            <EditButton basePath="/sessions" />
        </Datagrid>
    </List>
);

const SessionTitle = ({ record }) => {
    return <span>Session {record ? `"${record.title}"` : ''}</span>;
};

export const SessionEdit = (props) => (
    <Edit title={<SessionTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateInput label="Start date" source="start_date" />
            <DateInput label="End date" source="end_date" />
        </SimpleForm>
    </Edit>
);

export const SessionCreate = (props) => (
    <Create title="Create a session" {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <DateInput label="Start date" source="start_date" />
          <DateInput label="End date" source="end_date" />
        </SimpleForm>
    </Create>
);