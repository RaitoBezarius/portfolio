import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import Application from 'containers/Application.react';
import Landing from 'components/Landing.react';
import Contact from 'components/Contact.react';
import Projects from 'components/Projects.react';
import PageNotFound from 'components/PageNotFound.react';

const Routes = (
  <Route handler={Application}>
    <DefaultRoute handler={Landing} />
    <NotFoundRoute handler={PageNotFound} />
    <Route handler={Landing}
      name="home" />
    <Route handler={Contact}
      name="contact" />
    <Route handler={Projects}
      name="projects" />
	</Route>
);

export default Router.create({
	routes: Routes,
	location: Router.HashLocation
});
