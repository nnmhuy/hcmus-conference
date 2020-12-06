import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput, DateInput, UrlField, DateField } from 'react-admin';

export const PresentationList = (props) => (
	<List {...props}>
		<Datagrid>
			<TextField source="Major"/>
			<TextField source="Title"/>
			<TextField multiline source="Description"/>
			<UrlField source="Zoom URL"/>
			<TextField source="Author"/>
			<DateField source="Start Date"/>
			<DateField source="End Date"/>
			<EditButton basePath="/presentations" />
		</Datagrid>
	</List>
);

const PresentationTitle = ({ record }) => {
	return <span>Presentation {record ? `"${record.title}"` : ''}</span>;
};

export const PresentationEdit = (props) => (
	<Edit title={<PresentationTitle />} {...props}>
		<SimpleForm>
			<TextInput source="major"/>
			<TextInput source="title"/>
			<TextInput source="major"/>
			<TextInput multiline source="description"/>
			<TextInput source="zoom_url"/>
			<TextInput source="author"/>
			<DateInput label="Start date" source="start_date" />
			<DateInput label="End date" source="end_date" />
		</SimpleForm>
	</Edit>
);

export const PresentationCreate = (props) => (
	<Create title="Create a presentation" {...props}>
		<SimpleForm>
			<TextInput source="major"/>
			<TextInput source="title"/>
			<TextInput source="major"/>
			<TextInput multiline source="description"/>
			<TextInput source="zoom_url"/>
			<TextInput source="author"/>
			<DateInput label="Start date" source="start_date" />
			<DateInput label="End date" source="end_date" />
		</SimpleForm>
	</Create>
);