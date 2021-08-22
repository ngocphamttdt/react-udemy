import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import user from '../../assets/user.png'

export default function ProfileCard({profile}){
  return (
    <Card as={Link} to={`profile/${profile.id}`}>
      <Image src={profile.photoURL || {user} } />
      <Card.Content>
        <Card.Header content={profile.displayName}/>
      </Card.Content>
    </Card>
  )
}