import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateTimeInput } from 'react-admin';

export const SessionList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="startDate" />
            <DateField source="endDate" />
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
            <DateTimeInput label="Start date" source="startDate" />
            <DateTimeInput label="End date" source="endDate" />
        </SimpleForm>
    </Edit>
);

export const SessionCreate = (props) => (
    <Create title="Create a session" {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <DateTimeInput label="Start date" source="startDate" />
          <DateTimeInput label="End date" source="endDate" />
        </SimpleForm>
    </Create>
);