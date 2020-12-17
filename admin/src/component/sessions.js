import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateTimeInput, UrlField } from 'react-admin';

export const SessionList = (props) => (
    <List {...props}>
        <Datagrid>
					<TextField source="majorId"/>
					<TextField source="sessionId"/>
					<TextField source="sessionName"/>
					<TextField source="sessionName_en"/>
					<TextField source="room"/>
					<UrlField source="linkZoom"/>
					<TextField source="day"/>
					<DateField source="startDate" showTime="true"/>
					<DateField source="endDate" showTime="true"/>
					<EditButton basePath="/sessions" />
        </Datagrid>
    </List>
);

const SessionTitle = ({ record }) => {
    return <span>Session {record ? `"${record.sessionId}"` : ''}</span>;
};

export const SessionEdit = (props) => (
    <Edit title={<SessionTitle />} {...props}>
        <SimpleForm>
					<TextInput label="Major Id" source="majorId"/>
					<TextInput label="Session Id"source="sessionId"/>
					<TextInput source="sessionName"/>
					<TextInput source="sessionName_en"/>
					<TextInput source="room"/>
					<TextInput source="linkZoom"/>
					<TextInput source="day"/>
					<DateTimeInput source="startDate" showTime="true"/>
					<DateTimeInput source="endDate" showTime="true"/>
        </SimpleForm>
    </Edit>
);

export const SessionCreate = (props) => (
    <Create title="Create a session" {...props}>
        <SimpleForm>
					<TextInput label="Major Id" source="majorId"/>
					<TextInput label="Session Id" source="sessionId"/>
					<TextInput source="sessionName"/>
					<TextInput source="sessionName_en"/>
					<TextInput source="room"/>
					<TextInput source="linkZoom"/>
					<TextInput source="day"/>
					<DateTimeInput source="startDate" showTime="true"/>
					<DateTimeInput source="endDate" showTime="true"/>
        </SimpleForm>
    </Create>
);