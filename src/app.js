import React from 'react';
import Router from 'core/Router';

function runApplication() {
	Router.run(Root => {
		React.render(<Root />, document.getElementById('application'));
	});
}

runApplication();
