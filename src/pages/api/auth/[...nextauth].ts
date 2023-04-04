import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				const authResponse = await fetch('/users/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(credentials),
				});

				if (!authResponse.ok) {
					return null;
				}

				const user = await authResponse.json();

				return user;
			},
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'username' },
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'password',
				},
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
			// profile(profile) {
			//     return {
			//     // Return all the profile information you need.
			//     // The only truly required field is `id`
			//     // to be able identify the account when added to a database
			//     }
			// },
		}),
	],
	pages: {
		signIn: '/login',
		signOut: './login',
	},
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session }) {
			// Send properties to the client, like an access_token from a provider.
			return session;
		},
	},
});
