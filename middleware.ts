import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

// Match only protected routes (like /dashboard or /api)
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
