import React from 'react'

import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'


interface Props {
  activities: Activity[];
}

export default function ActivityList({activities}: Props) {
  return (
      <Segment>
        <Item.Group divided>
          {activities.map( activity => {
            return <Item key={activity.id}>
                <Item.Content>
                  <Item.Header as='a'>
                    <Item.Meta> {activity.date} </Item.Meta>
                  </Item.Header>
                  <Item.Description>
                    <div>{activity.description}</div>
                    <div>{activity.city}, {activity.venue} </div>
                  </Item.Description>
                  <Item.Extra>
                    <Button floated='right' content='view' color='blue'/>
                    <Label basic content={activity.category}/>

                  </Item.Extra>
                </Item.Content>

            </Item>
          })}
        </Item.Group>
      </Segment>
  )
}
