import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./pages/Layout";
import { AVALABLE_LOCALES } from "./data/i18n/i18n";
import { lazy, Suspense } from "react";
import Home from "./pages/home/home";

const Software = lazy(() => import("./pages/software"));
const Industries = lazy(() => import("./pages/industries"));
const Services = lazy(() => import("./pages/services"));
const Compliance = lazy(() => import("./pages/compliance"));
const Partners = lazy(() => import("./pages/partners"));
const Friends = lazy(() => import("./pages/friends"));
const QuotePage = lazy(() => import("./pages/quote"));
const Enciclopedia = lazy(() => import("./pages/enciclopedia"));
const Promo = lazy(() => import("./pages/promo"));
const NewHome = lazy(() => import("./pages/newHome/newHome"));
const PlansPage = lazy(() => import("./pages/plans/PlansPage"));

export const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/en" replace /> },
        ...AVALABLE_LOCALES.map((locale) => ({
          path: locale,
          children: [
            { index: true, element: <Home /> },
            { path: "software", element: <Software /> },
            { path: "industries", element: <Industries /> },
            { path: "services", element: <Services /> },
            { path: "compliance", element: <Compliance /> },
            { path: "partners", element: <Partners /> },
            { path: "about-us", element: <Friends /> },
            { path: "calculator", element: <QuotePage /> },
            { path: "enciclopedia", element: <Enciclopedia /> },
            { path: "promo", element: <Promo /> },
            { path: "newhome", element: <NewHome /> },
            { path: "plans", element: <PlansPage /> },
            { path: "*", element: <Navigate to={`/${locale}`} replace /> },
          ],
        })),
        { path: "*", element: <Navigate to="/en" replace /> },
      ],
    },
  ]);

  return <Suspense>{routes}</Suspense>;
};
