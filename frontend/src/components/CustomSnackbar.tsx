import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { ReactNode } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type Props = {
	severity: 'success' | 'info' | 'warning' | 'error' | undefined;
	children: ReactNode | string;
	vertical?: 'top' | 'bottom';
	horizontal?: 'left' | 'center' | 'right';
	onClose?: () => void;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	}
);

export const CustomSnackbar: React.FC<Props> = ({
	severity,
	children,
	vertical = 'top',
	horizontal = 'center',
	onClose,
}) => {
	const [open, setOpen] = React.useState(true);

	const handleClose = () => {
		setOpen(false);
		if (onClose) {
			onClose();
		}
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
				{children}
			</Alert>
		</Snackbar>
	);
};
