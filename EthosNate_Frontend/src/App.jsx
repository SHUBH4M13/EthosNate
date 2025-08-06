import Home from "./Pages/Home"
import AddNewCampaign from "./AddNewCampaign"
import {createBrowserRouter , RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add/campaign",
    element: <AddNewCampaign />
  },
  {
    path: "/"
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

//  // useEffect(() => {
//   const fetchCampaigns = async () => {
//     const data = await GetAllCampaigns();
//     console.log("All Campaigns:", data);
//   };

//   fetchCampaigns();
// }, []);
