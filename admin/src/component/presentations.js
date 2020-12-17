import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput, UrlField, DateField, DateTimeInput} from 'react-admin';

export const PresentationList = (props) => (
	<List {...props}>
		<Datagrid>
			<TextField source="sessionId"/>
			<TextField source="paperId"/>
			<DateField source="startDate" showTime="true"/>
			<DateField source="endDate" showTime="true"/>
			<TextField source="paperName"/>
			<TextField source="author"/>
			<TextField source="summary"/>
			<UrlField source="linkPdf"/>
			<UrlField source="linkZoom"/>
			<EditButton basePath="/presentations" />
		</Datagrid>
	</List>
);

const PresentationTitle = ({ record }) => {
	return <span>Presentation {record ? `"${record.paperName}"` : ''}</span>;
};

export const PresentationEdit = (props) => (
	<Edit title={<PresentationTitle />} {...props}>
		<SimpleForm>
			<TextInput source="sessionId"/>
			<TextInput source="paperId"/>
			<DateTimeInput label="Start date" source="startDate"/>
			<DateTimeInput label="End date" source="endDate"/>
			<TextInput source="paperName"/>
			<TextInput source="author"/>
			<TextInput multiline source="summary"/>
			<TextInput source="linkPdf"/>
			<TextInput source="linkZoom"/>
		</SimpleForm>
	</Edit>
);

export const PresentationCreate = (props) => {	
	return(
		<Create title="Create a presentation" {...props}>
			<SimpleForm>
				<TextInput source="sessionId"/>
				<TextInput source="paperId"/>
				<DateTimeInput label="Start date" source="startDate"/>
				<DateTimeInput label="End date" source="endDate"/>
				<TextInput source="paperName"/>
				<TextInput source="author"/>
				<TextInput multiline source="summary"/>
				<TextInput source="linkPdf"/>
				<TextInput source="linkZoom"/>
			</SimpleForm>
		</Create>
	)
};