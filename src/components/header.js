import React from 'react';
import { Link } from 'react-router';

export default function Header() {
	return (
		<div className="Header">
			<Link to={'/'} >Artists </Link>
			<Link to={'/concert-place'} >Concert place </Link>
			<Link to={'/performance-records'} >Performance records</Link>
			<hr/>
		</div>
	);
}
