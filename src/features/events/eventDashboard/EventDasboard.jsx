import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EvenList from './EventList'

import { useDispatch, useSelector } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder'
import EventFilters from './EventFilters'
import { listenToEventsFormFirestore } from '../../../app/firestore/fireStoreService';
import { listenToEvents } from '../eventActions';

import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';

const EventDashboard = () => {

	const dispatch = useDispatch()
	const { events } = useSelector(state => state.event)
	const { loading } = useSelector(state => state.async)
	const [predicate, setPredicate] = useState(new Map([
		['startDate', new Date()],
		['filter', 'all']
	]))

	function handleSetPredicate(key, value) {
		setPredicate(new Map(predicate.set(key, value)))
	}

	useFirestoreCollection({
		query: () => listenToEventsFormFirestore(predicate),
		data: events => dispatch(listenToEvents(events)),
		deps: [dispatch, predicate]
	})

	return (
		<Grid>
			<Grid.Column width={10}>
				{loading &&
					<>
						<EventListItemPlaceholder />
						<EventListItemPlaceholder />
					</>
				}
				<EvenList events={events} />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventFilters predicate={predicate} setPredicate={handleSetPredicate} loading={loading}  />
			</Grid.Column>
		</Grid>
	);
};

export default EventDashboard