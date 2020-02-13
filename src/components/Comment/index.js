import React from 'react';

import './style.css';

function Comment({ data }) {
	return (
		<div className='comments'>
			<div className='comment-body'>
				<div className='profile'>
					<img src={data.author.avatar} alt='' />
				</div>
				<div className='comment'>
					<p>
						<strong>{data.author.name}</strong>
						{data.content}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Comment;
