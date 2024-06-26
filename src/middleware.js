const { auth } = require("./auth");

// export { auth as middleware } from "@/auth";
export default auth((req) => {
  const isLoggedin = !!req.auth;
  const { nextUrl } = req;
  const currentRoute = nextUrl.pathname;

  // const isAdmin = req?.auth?.user?.role === "Admin";
  // const isRegistered =
  //   req?.auth?.user?.registrationCompleted === "false" ? false : true;

  // const authRoutes = ["/login", "/signup"];
  // const publicRoute = "/";
  // const defaultRedirectRouteifAuthenticated = "/dashboard";
  // const loginRoute = "/login";
  // const apiPrefix = "/api";
  // const adminPrefix = "/admin";
  // const nonRegisterAllowedRoutes = ["/dashboard", "/profile", "/"];
  // const onlyRegisteredRoutes = [
  //   "/search",
  //   `/product/flat`,
  //   "/product/stationary",
  //   "/register-item",
  // ];
  // //   //
  // // console.log(currentRoute);
  // if (nextUrl.pathname.startsWith(apiPrefix)) {
  //   return null;
  // }

  // if (currentRoute.startsWith(adminPrefix)) {
  //   if (isLoggedin) {
  //     if (!isAdmin) {
  //       return Response.redirect(
  //         new URL(defaultRedirectRouteifAuthenticated, nextUrl)
  //       );
  //     }
  //     return null;
  //   }
  //   return Response.redirect(new URL(loginRoute, nextUrl));
  // }
  // if (isAdmin && !currentRoute.startsWith(adminPrefix)) {
  //   return Response.redirect(new URL("/admin", nextUrl));
  // }
  // if (isLoggedin && onlyRegisteredRoutes.includes(currentRoute)) {
  //   if (!isRegistered) {
  //     return Response.redirect(new URL("/profile", nextUrl));
  //   }

  //   return null;
  // }

  // if (authRoutes.includes(currentRoute)) {
  //   if (isLoggedin) {
  //     return Response.redirect(
  //       new URL(defaultRedirectRouteifAuthenticated, nextUrl)
  //     );
  //   }

  //   return null;
  //   //   return Response.redirect(new URL("/dashboard"), nextUrl);
  // }
  // if (currentRoute !== publicRoute) {
  //   // console.log(currentRoute);
  //   if (!isLoggedin) {
  //     return Response.redirect(new URL(loginRoute, nextUrl));
  //   }
  //   return null;
  // }

  return null;
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
