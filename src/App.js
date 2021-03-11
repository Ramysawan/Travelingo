import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import CarouselComponent from "./components/carouselComponent";
import FooterComponent from "./components/footerComponent";
import MainComponent from "./components/main";

function App() {
  return (
    <div className="App">
      <Navbar class="color-navbar">
        <div className="container">
          <NavbarBrand href="/">Travelingo</NavbarBrand>
          <NavbarBrand href="/">About us</NavbarBrand>
          <NavbarBrand href="/">Contact us</NavbarBrand>
        </div>
      </Navbar>
      <header>
        <div>
          <CarouselComponent />
        </div>
      </header>
      <div>
        <MainComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
