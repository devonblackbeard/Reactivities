import { Container } from 'semantic-ui-react';
import NavBar from './navbar';
import ActivityDashboard from '../../features/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/form/ActivityForm';
import ActivityDetails from '../../features/details/ActivityDetails';

function App() {

  return (
    <>
      <NavBar />
      <Container style={{marginTop:'7em'}}>
        <Route path='/' exact component={HomePage} />
        <Route exact path='/activities' component={ActivityDashboard} />
        <Route path='/activities/:id' component={ActivityDetails} />
        <Route path={['/createActivity', '/manage/:id']} component={ActivityForm} />

      </Container>
    </> // this means fragment
  );
}

export default observer(App);
