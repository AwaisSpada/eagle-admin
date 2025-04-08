import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";
import MediaLibrary from "./pages/MediaLibrary";
// import Genres from "./pages/Genres";
import TVShows from "./pages/TVShows";
import Seasons from "./pages/Seasons";
import Episodes from "./pages/Episodes";
// import LiveTv from "./pages/LiveTv";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Subscriptions from "./pages/Subscriptions";
import Plans from "./pages/Plans";
import PlanLimits from "./pages/PlanLimits";
import Users from "./pages/Users";
import SoonToExpire from "./pages/SoonToExpire";
import Reviews from "./pages/Reviews";
import AppBanner from "./pages/AppBanner";
import Contants from "./pages/Contants";
import Settings from "./pages/Settings";
import Pages from "./pages/Pages";
import FAQ from "./pages/FAQ";
import Videos from "./pages/Videos";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import MoviesList from "./components/movies/MoviesList";
import TvShowsList from "./components/tvShows/TvShowsList";
import CreateTVShows from "./components/tvShows/CreateTVShows";
import Create from "./components/movies/Create";
import SeasonsList from "./components/seasons/SeasonsList";
import CreateSeasons from "./components/seasons/CreateSeasons";
import EpisodesList from "./components/episodes/EpisodesList";
import CreateEpisodes from "./components/episodes/CreateEpisodes";

const route = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <AdminLayout />, // Authentication handled inside AdminLayout
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "movies",
        element: <MoviesList />,
        children: [
          { index: true, element: <Movies /> },
          {
            path: "create",
            element: <Create />,
          },
        ],
      },

      { path: "media-library", element: <MediaLibrary /> },
      // { path: "genres", element: <Genres /> },
      {
        path: "tv-shows",
        element: <TvShowsList />,
        children: [
          { index: true, element: <TVShows /> },
          {
            path: "create",
            element: <CreateTVShows />,
          },
        ],
      },
      { path: "videos", element: <Videos /> },
      {
        path: "seasons",
        element: <SeasonsList />,
        children: [
          { index: true, element: <Seasons /> },
          {
            path: "create",
            element: <CreateSeasons />,
          },
        ],
      },
      {
        path: "episodes",
        element: <EpisodesList />,
        children: [
          { index: true, element: <Episodes /> },
          {
            path: "create",
            element: <CreateEpisodes />,
          },
        ],
      },
      // { path: "live-tv", element: <LiveTv /> },
      { path: "actors", element: <Actors /> },
      { path: "directors", element: <Directors /> },
      { path: "subscriptions", element: <Subscriptions /> },
      { path: "plans", element: <Plans /> },
      { path: "plan-limits", element: <PlanLimits /> },
      { path: "users", element: <Users /> },
      { path: "soon-to-expire", element: <SoonToExpire /> },
      { path: "reviews", element: <Reviews /> },
      { path: "app-banner", element: <AppBanner /> },
      { path: "constants", element: <Contants /> },
      { path: "settings", element: <Settings /> },
      { path: "notifications", element: <Notifications /> },
      { path: "pages", element: <Pages /> },
      { path: "faq", element: <FAQ /> },
    ],
  },
]);

export default route;
