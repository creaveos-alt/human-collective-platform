import { createBrowserRouter } from "react-router";
import { SharedLayout } from "./components/SharedLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { AILunchboxPage } from "./pages/AILunchboxPage";
import { ChaptersPage } from "./pages/ChaptersPage";
import { EventsPage } from "./pages/EventsPage";
import { BuildersPage } from "./pages/BuildersPage";
import { ResearchPage } from "./pages/ResearchPage";
import { GetInvolvedPage } from "./pages/GetInvolvedPage";
import { ContactPage } from "./pages/ContactPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SharedLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "programs", Component: ProgramsPage },
      { path: "ai-lunchbox", Component: AILunchboxPage },
      { path: "chapters", Component: ChaptersPage },
      { path: "events", Component: EventsPage },
      { path: "builders", Component: BuildersPage },
      { path: "research", Component: ResearchPage },
      { path: "get-involved", Component: GetInvolvedPage },
          { path: "contact", Component: ContactPage },
      { path: "resources", Component: ResourcesPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
