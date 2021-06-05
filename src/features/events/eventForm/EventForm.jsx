
import { Formik, Form } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'
import { createEvent, updateEvent } from '../eventActions'
import * as Yup from 'yup'
import MyTextInput from '../../../app/common/form/MyTextInput'
import MyTextArea from '../../../app/common/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput'
import MyDateInput from '../../../app/common/form/MyDateInput'
import { categoryData } from '../../../app/api/categoryOptions'


export default function EventForm({ match, history }) {
	const dispatch = useDispatch()
	const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id))

	const initialValues = selectedEvent ?? {
		title: '',
		category: '',
		description: '',
		city: '',
		venue: '',
		date: '',
	}

	const validationSchema = Yup.object({
		title: Yup.string().required('You must provide a title'),
		category: Yup.string().required('You must provide a category'),
		description: Yup.string().required(),
		city: Yup.string().required(),
		venue: Yup.string().required(),
		date: Yup.string().required(),

	})

	return (
		<Segment clearing>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={values => {
					selectedEvent ?
						dispatch(updateEvent({ ...selectedEvent, ...values }))
						:
						dispatch(createEvent({
							...values,
							id: '3',
							hostedBy: 'NgocPham',
							attendees: []
						}))
					history.push('/events')
				}}
			>
				{({ isSubmitting, dirty, isValid }) => (
					<Form className='ui form'>
						<Header sub color='teal' content='Event Details' />
						<MyTextInput name='title' placeholder='Event title' />
						<MySelectInput name='category' placeholder='Category' options={categoryData} />
						<MyTextArea name='description' placeholder='Description' />
						<Header sub color='teal' content='Event Location Details' />
						<MyTextInput name='city' placeholder='City' />
						<MyTextInput name='venue' placeholder='Venue' />
						<MyDateInput
							name='date'
							placeholderText='Date'
							type='date'
							timeFormat='HH:mm'
							showTimeSelect
							timeCaption='time'
							dateFormat='MMMM d, yyyy h:mm a'
						/>

						<Button
							loading={isSubmitting}
							disabled={!isValid || !dirty || isSubmitting}
							type="submit"
							floated="right"
							positive
							content="Submit" />
						<Button
							disabled={isSubmitting}
							as={Link} to='/events'
							type="submit"
							floated="right"
							content="Cancel" />
					</Form>
				)}

			</Formik>
		</Segment>
	);
}