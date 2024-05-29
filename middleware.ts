import {
	authMiddleware,
	withAuth,
} from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";
import { effect } from "zod";

export default function middleware(req: NextRequest) {
	return withAuth(req);
}

export const config = {
	// matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
	matcher: ["/create-post"],
};
