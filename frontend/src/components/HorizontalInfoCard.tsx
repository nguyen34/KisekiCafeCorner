import * as React from 'react';
import { ReactNode } from 'react';
import classNames from 'classnames';
import useResponsive from '../hooks/useResponsive';

type Side = 'left' | 'right';

type Props = {
	children: ReactNode | string;
	side: Side;
	title: string;
	image: string;
	imagePortrait: string;
	link: string;
};

export const HorizontalInfoCard: React.FC<Props> = ({
	children,
	side,
	title,
	image,
	imagePortrait = '',
	link = '',
}) => {
	const isPortrait = useResponsive().isPortrait;
	const cardClass = classNames({
		'flex flex-1 flex-col items-center justify-around bg-sky-200 gap-4 py-4 px-4 shadow-m':
			true,
		'order-2 fade-in-left rounded-r-lg': side === 'left',
		'order-1 fade-in-right rounded-l-lg': side === 'right',
	});

	const imageContainerClass = classNames({
		'flex-1': true,
		'order-1 fade-in-right': side === 'left',
		'order-2 fade-in-left': side === 'right',
	});

	const imageClass = classNames({
		'w-full h-auto': true,
		'rounded-l-lg': side === 'left',
		'rounded-r-lg': side === 'right',
	});

	const titleClass = classNames({
		'text-center font-bold': true,
	});

	const textClass = classNames({
		'text-center text-xl font-semibold': true,
	});

	const linkClass = classNames({
		'text-center order-3 hover:text-violet-500': true,
	});

	const imageLink = isPortrait ? imagePortrait : image;

	return (
		<div className="flex flex-row mx-auto">
			<div className={cardClass}>
				<h1 className={titleClass}>{title}</h1>
				<p className={textClass}>{children}</p>
				{link !== '' && (
					<a className={linkClass} href={link} target="_blank" rel="noreferrer">
						{' '}
						Link
					</a>
				)}
			</div>
			<div className={imageContainerClass}>
				<img className={imageClass} src={imageLink} alt={title} />
			</div>
		</div>
	);
};
