import React from "react";
import AddVideo from "./components/AddVideo";
import AllVideos from "./components/Allvideos";
import Filters from "./components/Filters";
import WatchedVideos from "./components/WatchedVideos";
import UnwatchedVideos from "./components/UnwatchedVideos";

function App() {
  return (
    <div className="h-screen my-10 p-20">
      <div className="flex">
        <div className="w-full border border-slate-400 p-6 space-y-8">
          <div className="border-b py-2 border-slate-400 flex justify-between items-center">
            <span className="font-bold">All Videos</span>
            <Filters />
          </div>
          <AllVideos />
          <AddVideo />
        </div>
        <div className="w-full border border-slate-400 p-6 space-y-8">
          <div className="border-b py-2 border-slate-400">
            <span className="font-bold">Watched Videos</span>
          </div>
          <WatchedVideos />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 border border-slate-400 p-6 space-y-8">
          <div className="border-b py-2 border-slate-400">
            <span className="font-bold">Unwatched Videos</span>
          </div>
          <UnwatchedVideos />
        </div>
      </div>
    </div>
  );
}

export default App;
