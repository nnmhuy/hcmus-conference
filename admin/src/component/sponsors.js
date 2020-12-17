import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput, UrlField } from 'react-admin';

export const SponsorList = (props) => (
    <List {...props}>
        <Datagrid>
						<TextField source="name"/>
						<TextField source="type"/>
						<UrlField source="url"/>
						<TextField source="image"/>
            <EditButton basePath="/sponsors" />
        </Datagrid>
    </List>
);

const SponsorTitle = ({ record }) => {
    return <span>Sponsor {record ? `"${record.name}"` : ''}</span>;
};

export const SponsorEdit = (props) => (
    <Edit title={<SponsorTitle />} {...props}>
        <SimpleForm>
					<TextInput source="name"/>	
					<TextInput source="type"/>
					<TextInput source="url"/>
					<TextInput source="image"/>
				</SimpleForm>
    </Edit>
);

export const SponsorCreate = (props) => (
    <Create title="Create a sponsor" {...props}>
        <SimpleForm>
					<TextInput source="name"/>
					<TextInput source="type"/>
					<TextInput source="url"/>
					<TextInput source="image"/>
        </SimpleForm>
    </Create>
);