import * as React from 'react';
import { ReactNode } from 'react';
import swordGif from '../assets/gif/swordsman.gif';
import chefGif from '../assets/gif/chef.gif';
import '../css/components/ChatMessage.css';
import classNames from 'classnames';

type AllowedTypes = 'chef' | 'sword';

type Props = {
	children: ReactNode | string;
	type: AllowedTypes;
};

export const ZenChatMessage: React.FC<Props> = ({ children, type }) => {
	const chatContainerClass = classNames({
		'flex justify-center w-fit m-4': true,
		'flex-col': type === 'sword',
	});

	const chatBoxClass = classNames({
		'chat-box-solid': true,
		'chat-arrow-solid-top-right': type === 'chef',
		'chat-arrow-solid-bottom': type === 'sword',
	});

	const imgClass = classNames({
		'h-52': true,
		'mx-auto': type === 'sword',
	});
	return (
		<div className={chatContainerClass}>
			<div className={chatBoxClass}>{children}</div>
			<div>
				<img
					className={imgClass}
					src={type === 'chef' ? chefGif : swordGif}
					alt={type === 'chef' ? 'chef' : 'sword'}
				/>
			</div>
		</div>
	);
};
