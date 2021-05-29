import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventdetailedHeader';
import EventDetailedInfo from './EventdetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

export default function EvenDetailedPage() {
	return (
		<Grid>
			<Grid.Column width={10}>
				<EventDetailedHeader />
				<EventDetailedInfo />
				<EventDetailedChat />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventDetailedSidebar />
			</Grid.Column>
		</Grid>
	)
}
