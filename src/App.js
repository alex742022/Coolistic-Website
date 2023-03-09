import Section1 from "./Components/main/section1";
import Footer from "./Components/main/footer";
import Section2 from "./Components/main/section2";
import Services from "./Components/main/Services/services";
import BrandsAircon from "./Components/main/brandsAircon";
import Certificates from "./Components/certificates/certificates";
function App() {
  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Services />
      <Certificates/>
      <BrandsAircon/>
      <Footer />
    </div>
  );
}

export default App;
