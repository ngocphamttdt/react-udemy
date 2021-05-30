import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EvenDetailedPage from '../../features/events/eventDetail/EvenDetailedPage';
import EventDashboard from '../../features/events/eventDashboard/EventDasboard';
import NavBar from '../../features/nav/NavBar';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/Home/HomePage';
import Sandbox from '../../features/sanbox/Sandbox';

export default function App() {

	return (
		<>
			<Route exact path="/" component={HomePage} />
			<Route path={'/(.+)'} render={() => (
				<>
					<NavBar />
					<Container className='main'>
						<Route exact path='/events' component={EventDashboard} />
						<Route exact path='/sandbox' component={Sandbox} />
						<Route exact path='/events/:id' component={EvenDetailedPage} />
						<Route exact path={['/createEvent', '/manage/:id']} component={EventForm} />
					</Container>
				</>

			)} />

		</>
	);
}
