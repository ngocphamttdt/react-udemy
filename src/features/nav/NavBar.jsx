import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react'
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

export default function NavBar({ setFormOpen }) {

	const { authenticated } = useSelector(state => state.auth)


	return (
		<Menu inverted fixed="top">
			<Container>
				<Menu.Item as={NavLink} to='/events'>
					<img src={logo} alt='logo' />
				</Menu.Item>
				<Menu.Item as={NavLink} to='/' name='Re-vents' />
				<Menu.Item as={NavLink} to='/events' name='Events' />
				<Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
				{authenticated &&
					<Menu.Item as={NavLink} to='/createEvent'>
						<Button positive inverted content='Create Event' />
					</Menu.Item>
				}

				{authenticated ?
					(<SignedInMenu />)
					:
					(<SignedOutMenu />)
				}
			</Container>
		</Menu>
	);
}