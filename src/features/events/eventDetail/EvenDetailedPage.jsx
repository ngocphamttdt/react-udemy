import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { listenToEventFromFirestore } from '../../../app/firestore/fireStoreService';
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc';
import { listenToEvents } from '../eventActions';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventdetailedHeader';
import EventDetailedInfo from './EventdetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { Redirect } from 'react-router-dom'

export default function EvenDetailedPage({ match }) {
	const dispatch = useDispatch()
	const event = useSelector(state => state.event.events.find(e => e.id === match.params.id))
	const { loading, error } = useSelector((state) => state.async)

	useFirestoreDoc({
		query: () => listenToEventFromFirestore(match.params.id),
		data: event => dispatch(listenToEvents([event])),
		deps: [match.params.id, dispatch]
	})

	if (loading || (!event && !error)) return <LoadingComponent content='Loading event ...' />
	
	if (error) return <Redirect to='/error' />

	return (
		<Grid>
			<Grid.Column width={10}>
				<EventDetailedHeader event={event} />
				<EventDetailedInfo event={event} />
				<EventDetailedChat />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventDetailedSidebar attendees={event?.attendees} />
			</Grid.Column>
		</Grid>
	)
}
