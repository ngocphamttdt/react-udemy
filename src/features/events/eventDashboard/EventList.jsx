import React from 'react'
import EventListItem from './EventListItem'


export default function EvenList({events, selectEvent, deleteEvent}){
    return (
		<>
			{events.map((event) => (
				<EventListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent} />
			))}
		</>
	);
}