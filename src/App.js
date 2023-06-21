import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Main, Channel, Navbar, VideoDetail, Search } from "./components";


function App() {
  return (
      <Box>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/channel/:id" element={<Channel />} />
          <Route exact path="/video/:id" element={<VideoDetail />} />
          <Route exact path="/search/:id" element={<Search />} />
        </Routes>
      </Box>
  );
}

export default App;
 