import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import TemplateWithNavbar from "./pages/TemplateWithNavbar";
import HistoryPage from "./pages/HistoryPage";
import CreateInspectionPage from "./pages/CreateInspectionPage";
import ViewInspectionPage from "./pages/ViewInspectionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplateWithNavbar />,
    children: [
      { 
        index: true,
        element: <App />
      },
      {
        path: "history",
        element: <HistoryPage />
      },
      {
        path: "create",
        element: <CreateInspectionPage />
      },
      {
        path: "view",
        element: <ViewInspectionPage />
      }
    ]
  },
]);