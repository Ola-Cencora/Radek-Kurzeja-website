import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Gallery from "../components/pages/Gallery/Gallery";
import GallerySetDescription from "../components/pages/GallerySetDescription/GallerySetDescription";
import SingleArt from "../components/pages/SingleArt/SingleArt";
import Music from "../components/pages/Music/Music";
import Contact from "../components/pages/Contact/Contact";
import About from "../components/pages/About/About";
import NotFound from "../components/pages/NotFound/NotFound";
import RootLayout from "./RootLayout";
import HomeLayout from "./HomeLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="gallery" element={<Gallery />} />
        <Route
          path="gallery/series/:name"
          element={<GallerySetDescription />}
        />
        <Route path="gallery/:id" element={<SingleArt />} />
        <Route path="music" element={<Music />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
