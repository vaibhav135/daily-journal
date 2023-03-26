import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { protectedRoutes, authRoutes } from './utils';
import { getToken } from 'next-auth/jwt';

const checkProtectedRoutes = (request: NextRequest) => {
	let routedMathched = false;

	protectedRoutes.forEach(({ route }) => {
		if (request.nextUrl.pathname === route) {
			routedMathched = true;
			return;
		}
	});
	return routedMathched;
};

const checkAuthRoutes = (request: NextRequest) => {
	let routedMathched = false;

	authRoutes.forEach(({ route }) => {
		if (request.nextUrl.pathname === route) {
			routedMathched = true;
			return;
		}
	});
	return routedMathched;
};

export async function middleware(request: NextRequest) {
	const session = await getToken({ req: request });

	if (checkProtectedRoutes(request) && !session) {
		return NextResponse.redirect(new URL('/login', request.url));
	} else if (checkAuthRoutes(request) && session) {
		return NextResponse.redirect(new URL('/home', request.url));
	}
}

export const config = {
	matcher: ['/login', '/home'],
};
