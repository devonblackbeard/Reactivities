import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import LoadingComponent from '../../app/layout/LoadingComponents'
import { useStore } from '../../app/stores/store'
import ActivityList from './ActivityList'


export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();

  useEffect(() => {
     activityStore.loadActivities();
    }, [activityStore] )

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />

  return (
    <Grid>
      <h2>Dash</h2>
      <Grid.Column width='10'>
        <ActivityList />
      </Grid.Column>

      <Grid.Column width='6'>

      </Grid.Column>

    </Grid>
  )
})
