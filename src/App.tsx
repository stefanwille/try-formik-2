import React from 'react';
import 'normalize.css';

import './CheckboxExample';
import CheckboxExample from './CheckboxExample';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<CheckboxExample subtitle="Hey!" />
			</header>
		</div>
	);
};

export default App;
