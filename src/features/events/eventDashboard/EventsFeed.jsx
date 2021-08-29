import React from 'react'
import { Feed, Header, Segment } from 'semantic-ui-react'
import user from '../../assets/user.png'

export default function EventsFeed() {
  const image = user
  const date = '3 days ago'
  const summary = 'Diana joined an event'
  return (
    <>
      <Header attached color='teal' icon='newspager' content='News feed' />
      <Segment attached='bottom'>
        <Feed>
          <Feed.Event image={image} date={date} summary={summary} />
          <Feed.Event image={image} date={date} summary={summary} />
          <Feed.Event image={image} date={date} summary={summary} />
          <Feed.Event image={image} date={date} summary={summary} />
        </Feed>
      </Segment>
    </>
  )
}