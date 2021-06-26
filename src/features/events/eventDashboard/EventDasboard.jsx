import React from 'react'
import { Grid } from 'semantic-ui-react'
import EvenList from './EventList'

import { useSelector } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder'
import EventFilters from './EventFilters'

const EventDashboard = () => {

	const { events } = useSelector(state => state.event)
	const {loading} = useSelector(state => state.async)


	
	return (
		<Grid>
			<Grid.Column width={10}>
				{loading &&
				<>
				<EventListItemPlaceholder/>
				<EventListItemPlaceholder/>
				</>
				}
				<EvenList events={events} />
			</Grid.Column>
			<Grid.Column width={6}>
			<EventFilters/>
			</Grid.Column>
		</Grid>
	);
};

export default EventDashboard