import React from 'react'

import Title from '../components/Title'

const Home = () => {
	return (
		<div className="inner">
			<Title lineContent="This is the" lineContent2="home page"/>
			<div>
				<p className="info">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book.
				</p>
			</div>
		</div>
	)
}

export default Home
