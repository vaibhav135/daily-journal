'use client';
import { Button } from '@ui/*';
import { signOut } from 'next-auth/react';

const HomePage = () => {
	return (
		<div>
			You have successfully logged in.
			<Button intent="primary" text="Logout" onClick={() => signOut()} />
		</div>
	);
};

export default HomePage;
