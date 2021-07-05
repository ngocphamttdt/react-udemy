import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { signOutFirebase } from '../../app/firestore/firebaseService'
import user from '../assets/user.png'

export default function SignedInMenu() {
  const { currentUser } = useSelector(state => state.auth)
  const history = useHistory()

  async function handleSignOut() {
    try {
      history.push('/')
      await signOutFirebase()
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src={currentUser.photoUrl || user} />
      <Dropdown pointing='top left' text={currentUser.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
          <Dropdown.Item text='My profile' icon='user' />
          <Dropdown.Item as={Link} to='/account' text='My account' icon='setting' />
          <Dropdown.Item onClick={handleSignOut}
            text='Sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}