import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	return { isPortrait };
}
