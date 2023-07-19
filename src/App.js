import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home/Home";
import GetStarted from "./Pages/Get Started/GetStarted";
import ButtonPage from "./Pages/Components Pages/Button/ButtonPage";
import Avatar from "./Pages/Components Pages/Avatar/Avatar.jsx";
import Alert from "./Pages/Components Pages/Alert/Alert.jsx";
import Badges from "./Pages/Components Pages/Badges/Badges.jsx";
import Card from "./Pages/Components Pages/Card/Card.jsx";
import Image from "./Pages/Components Pages/Image/Image.jsx";
import Input from "./Pages/Components Pages/Input/Input.jsx";
import Typography from "./Pages/Components Pages/Typography/Typography.jsx";
import List from "./Pages/Components Pages/List/List.jsx";
import Navigation from "./Pages/Components Pages/Navigation/Navigation.jsx";
import Modal from "./Pages/Components Pages/Modal/Modal.jsx";
import Rating from "./Pages/Components Pages/Rating/Rating.jsx";
import Snackbar from "./Pages/Components Pages/Snackbar/Snackbar.jsx";
import Grid from "./Pages/Components Pages/Grid/Grid.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/docs/avatar" element={<Avatar />} />
        <Route path="/docs/alert" element={<Alert />} />
        <Route path="/docs/badge" element={<Badges />} />
        <Route path="/docs/button" element={<ButtonPage />} />
        <Route path="/docs/card" element={<Card />} />
        <Route path="/docs/images" element={<Image />} />
        <Route path="/docs/input" element={<Input />} />
        <Route path="/docs/typography" element={<Typography />} />
        <Route path="/docs/list" element={<List />} />
        <Route path="/docs/navigation" element={<Navigation />} />
        <Route path="/docs/modal" element={<Modal />} />
        <Route path="/docs/rating" element={<Rating />} />
        <Route path="/docs/snackbar" element={<Snackbar />} />
        <Route path="/docs/grid" element={<Grid />} />
      </Routes>
    </>
  );
}

export default App;
