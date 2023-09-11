import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home/Home";
import GetStarted from "./Pages/Get Started/GetStarted";
import Avatar from "./PreBuiltComponents/Avatar/Avatar";
import Alert from "./PreBuiltComponents/Alert/Alert";
import Badges from "./PreBuiltComponents/Badges/Badges";
import Card from "./PreBuiltComponents/Card/Card";
import Image from "./PreBuiltComponents/Image/Image";
import Input from "./PreBuiltComponents/Input/Input";
import Typography from "./PreBuiltComponents/Typography/Typography";
import List from "./PreBuiltComponents/List/List";
import Navigation from "./PreBuiltComponents/Navigation/Navigation";
import Modal from "./PreBuiltComponents/Modal/Modal";
import Rating from "./PreBuiltComponents/Rating/Rating";
import Snackbar from "./PreBuiltComponents/Snackbar/Snackbar";
import Grid from "./PreBuiltComponents/Grid/Grid";
import Button from "./PreBuiltComponents/Button/Button";
import Setup from "./Components/Setup/Setup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/get-started"
          element={
            <GetStarted>
              <Setup />
            </GetStarted>
          }
        />
        <Route
          path="/docs/avatar"
          element={
            <GetStarted>
              <Avatar />
            </GetStarted>
          }
        />
        <Route
          path="/docs/alert"
          element={
            <GetStarted>
              <Alert />
            </GetStarted>
          }
        />
        <Route
          path="/docs/badge"
          element={
            <GetStarted>
              <Badges />
            </GetStarted>
          }
        />
        <Route
          path="/docs/button"
          element={
            <GetStarted>
              <Button />
            </GetStarted>
          }
        />
        <Route
          path="/docs/card"
          element={
            <GetStarted>
              <Card />
            </GetStarted>
          }
        />
        <Route
          path="/docs/images"
          element={
            <GetStarted>
              <Image />
            </GetStarted>
          }
        />
        <Route
          path="/docs/input"
          element={
            <GetStarted>
              <Input />
            </GetStarted>
          }
        />
        <Route
          path="/docs/typography"
          element={
            <GetStarted>
              <Typography />
            </GetStarted>
          }
        />
        <Route
          path="/docs/list"
          element={
            <GetStarted>
              <List />
            </GetStarted>
          }
        />
        <Route
          path="/docs/navigation"
          element={
            <GetStarted>
              <Navigation />
            </GetStarted>
          }
        />
        <Route
          path="/docs/modal"
          element={
            <GetStarted>
              <Modal />
            </GetStarted>
          }
        />
        <Route
          path="/docs/rating"
          element={
            <GetStarted>
              <Rating />
            </GetStarted>
          }
        />
        <Route
          path="/docs/snackbar"
          element={
            <GetStarted>
              <Snackbar />
            </GetStarted>
          }
        />
        <Route
          path="/docs/grid"
          element={
            <GetStarted>
              <Grid />
            </GetStarted>
          }
        />
      </Routes>
    </>
  );
}

export default App;
