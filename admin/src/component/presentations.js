import * as React from "react";
import { useGetList, Loading, Error, List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput, DateInput, UrlField, DateField, AutocompleteInput} from 'react-admin';
import { useState, useEffect } from 'react';

export const PresentationList = (props) => (
	<List {...props}>
		<Datagrid>
			<TextField source="majorId"/>
			<TextField source="title"/>
			<DateField source="startDate"/>
			<DateField source="endDate"/>
			<TextField source="room"/>
			<UrlField source="paperLink"/>
			<TextField multiline source="description"/>
			<UrlField source="linkZoom"/>
			<TextField source="author"/>
			<TextField source="sessionId"/>
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
			<TextInput source="majorId"/>
			<DateInput label="Start date" source="startDate" />
			<DateInput label="End date" source="endDate" />
			<TextInput source="title"/>
			<TextInput source="room"/>
			<TextInput source="paperLink"/>
			<TextInput multiline source="description"/>
			<TextInput source="linkZoom"/>
			<TextInput source="author"/>
			<TextInput source="sessionId"/>
		</SimpleForm>
	</Edit>
);

export const PresentationCreate = (props) => {
	// const { session, loading, error } = useGetList('sessions', {
  //   sort: { field: 'startDate', order: 'ASC' },
  //   filter: {},	
	// });
	// if (loading) { return <Loading />; }
	// if (error) { return <p>ERROR</p>; }	
	return(
		<Create title="Create a presentation" {...props}>
			<SimpleForm>
				<TextInput source="majorId"/>
				<DateInput label="Start date" source="startDate" />
				<DateInput label="End date" source="endDate" />
				<TextInput source="title"/>
				<TextInput source="room"/>
				<TextInput source="paperLink"/>
				<TextInput multiline source="description"/>
				<TextInput source="linkZoom"/>
				<TextInput source="author"/>
				<TextInput source="sessionId"/>
				{/* <AutocompleteInput source="sessionId" choices={} optionText="startDate" optionValue="id"/> */}
			</SimpleForm>
		</Create>
	)
};