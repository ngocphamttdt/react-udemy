import React from 'react'
import { Menu, Header } from 'semantic-ui-react'
import Calendar from 'react-calendar'

export default function EventFilters() {
  return (
    <>
      <Menu vertical size='large' style={{ width: '100%'}}>
        <Header icon='filter' attached color='teal' content='Filters' />
        <Menu.Item content='All Event'/>
        <Menu.Item content='Im going'/>
        <Menu.Item content='Im hosting'/>
      </Menu>
      <Header icon='calendar' attached color='teal' content='select date'  />
      <Calendar/>

    </>
  )
}