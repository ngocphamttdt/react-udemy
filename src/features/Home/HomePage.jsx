import React from 'react';
import { Container, Segment, Header, Image, Button, Icon } from 'semantic-ui-react';
import logo from '../assets/logo.png';

export default function HomePage({history}) {
	return(
		<Segment inverted textAlign='center' vertical className='masthead'>
		<Container>
			<Header as='h1' inverted>
				<Image size='massive' src={logo} style={{marginBottom:12}} />
				Re-vents
			</Header>
			<Button onClick={() => history.push('/events')}> Get Started
			<Icon name='right arrow' inverted/>
			</Button>
		</Container>

		</Segment>
	)
}
