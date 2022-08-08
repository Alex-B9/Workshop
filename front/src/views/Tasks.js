import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tasks = () => {
	const [data, setData] = useState([]);
	const [playOnce, setPlayOnce] = useState(true);

	useEffect(() => {
		if (playOnce) {
			axios.get('http://localhost:3001/api/tasks').then((res) => {
				setData(res.data.data);
				setPlayOnce(false);
			});
		}
	});

	return (
		<header className='container header'>
			<h1>Todo list</h1>
			<div className='container header_content'>
				<div className='header_content_left'>
					<form method='post' action='/tasks'>
						<div>
							<input type='text' name='task' placeholder='Add task' />
						</div>
						<div>
							<input type='submit' value='Add' />
						</div>
					</form>
				</div>
				<div className='header_content_right'>
					<ul>
						{data.map((t) => {
							if (t.done) {
								return (
									<li key={t._id} className='container'>
										<span>{t.title}</span>
										<button id={t._id} className='delete'>
											Delete
										</button>
									</li>
								);
							} else {
								return (
									<li key={t._id} className='container'>
										<span>{t.title}</span>
										<button id={t._id} className='end'>
											Done
										</button>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Tasks;
