import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		Providers.Credentials({
			name: 'Nickname Provider',
			credentials: {
				username: { label: 'Nickname', type: 'text', placeholder: 'dima-bogatyrev' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize() {
				const user = (credentials) => {
					if (user) {
						// Any user object returned here will be saved in the JSON Web Token
						return Promise.resolve(user);
					} else {
						return Promise.resolve(null);
					}
				};
				// const user = { name: 'dima-bogatyrev', email: 'bogatyrov200488@gmail.com' };
				return user;
			},
		}),
		// ...add more providers here
	],
	session: {
		jwt: true,
	},

	// A database is optional, but required to persist accounts in a database
	// database: process.env.DATABASE_URL,
	pages: {
		// signIn: '/login',
		// 	signOut: '/auth/signout',
		// 	error: '/auth/error', // Error code passed in query string as ?error=
		// 	verifyRequest: '/auth/verify-request', // (used for check email message)
		// 	newUser: null, // If set, new users will be directed here on first sign in
	},
});
