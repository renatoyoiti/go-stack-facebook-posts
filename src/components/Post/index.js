import React from 'react';

import './style.css';

import Comment from '../Comment';

function Post({ data }) {
	return (
		<li className='body'>
			<div className='post'>
				<div className='author'>
					<img src={data.author.avatar} alt='' />
					<div className='data'>
						<h3>{data.author.name}</h3>
						<p>{data.date}</p>
					</div>
				</div>
				<p>{data.content}</p>
			</div>
			<hr className='separation' />
			{data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
		</li>
	);
}

export default Post;
