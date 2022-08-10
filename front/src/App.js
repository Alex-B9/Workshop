import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Tasks = lazy(() => import('./views/Tasks'));

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/tasks' element={<Tasks />} />
			</Routes>
		</Router>
	);
}

export default App;
