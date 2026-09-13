import { createBrowserRouter } from "react-router";
import Root from "./Root";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import InsightsPage from "../pages/InsightsPage";
import LawsPage from "../pages/LawsPage";
import VideosPage from "../pages/VideosPage";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "insights", Component: InsightsPage },
      { path: "laws", Component: LawsPage },
      { path: "videos", Component: VideosPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
