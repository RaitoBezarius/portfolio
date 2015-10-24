import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';

import Application from 'containers/Application.react';
import Landing from 'components/Landing.react';
import Contact from 'components/Contact.react';

const Routes = (
  <Route handler={Application}>
    <DefaultRoute handler={Landing} />
    <Route handler={Landing}
      name="home" />
    <Route handler={Contact}
      name="contact" />
	</Route>
);

export default Router.create({
	routes: Routes,
	location: Router.HashLocation
});
