import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setPageHeader } from '../store/reducers/app/actionCreators';
import { Dispatch } from 'redux';
import classNames from 'classnames';
import zenCafe from '../assets/artwork/zen_cafe.png';
import zenCafePortrait from '../assets/artwork/zen_cafe_portrait.png';
import { AboutData } from '../config/AboutData';
import useResponsive from '../hooks/useResponsive';
import { HorizontalInfoCard } from '../components/HorizontalInfoCard';

const About: React.FC = () => {
	const dispatch: Dispatch<any> = useDispatch();
	React.useEffect(() => {
		dispatch(setPageHeader('About Me'));
	});

	const isPortrait = useResponsive().isPortrait;

	const image = isPortrait ? zenCafePortrait : zenCafe;

	const bannerCardClass = classNames({
		'flex w-full items-center justify-start bg-sky-200 shadow-m': true,
	});
	const infoContentClass = classNames({
		'flex flex-col w-full h-full justify-start py-4 px-8 fade-in-left': true,
		'justify-around': isPortrait,
		'justify-center gap-8': !isPortrait,
	});

	const contentClass = classNames({
		'text-center text-xl font-semibold': true,
	});

	const titleClass = classNames({
		'text-center font-bold': true,
	});

	const imageClass = classNames({
		'w-full fade-in-right': true,
	});

	const infoCardContainerClass = classNames({
		'flex flex-col w-7/12 h-full justify-start py-4 mx-auto fade-in-top gap-4':
			true,
	});

	return (
		<div className="flex justify-center flex-col">
			<div className={bannerCardClass}>
				<div className={infoContentClass}>
					<h1 className={titleClass}>About &#39;Zen No Kiseki&#39;</h1>
					<p className={contentClass}>
						Otherwise known as the &#39;Chef of Cold Steel&#39;, Zen No Kiseki
						is an English VTuber, hailing from a foreign land known as
						&#39;Canada&#39;. A trained martial artist, Zen is a master of the
						&#39;Eight Leaves One Blade&#39; school of swordsmanship, holding
						the title of &#39;Divine Blade of Cold Steel&#39;.
					</p>
					<p className={contentClass}>
						Originally a swordsman for hire, Zen has since retired from his
						mercenary days and now spends his time working a humble cafe,
						learning new recipes and streaming on Twitch and making YouTube
						videos. Zen is a variety streamer who enjoys playing a wide variety
						of games, including JRPGs, fighting games, rhythm games and to his
						reluctance, horror games.
					</p>
				</div>
				<div className={imageClass}>
					<img className="w-full h-full" src={image} alt="Zen Profile" />
				</div>
			</div>
			<div className={infoCardContainerClass}>
				{AboutData.map((data, index) => {
					return (
						<HorizontalInfoCard
							key={index}
							side={index % 2 === 0 ? 'left' : 'right'}
							title={data.title}
							image={data.image}
							imagePortrait={data.imagePortrait}
							link={data.link}
						>
							{data.content}
						</HorizontalInfoCard>
					);
				})}
			</div>
		</div>
	);
};

export default About;
