import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './pages/Main';
import AddEditPage from './pages/AddEdit';
import NotFound from 'components/NotFound';

function Photo() {
	const match = useRouteMatch();
	return (
		<Switch>
			<Route exact path={match.url} component={MainPage} />
			<Route exact path={`${match.url}/add`} component={AddEditPage} />
			<Route exact path={`${match.url}/:photoId`} component={AddEditPage} />
			<Route component={NotFound} />
		</Switch>
	);
}

export default Photo;
