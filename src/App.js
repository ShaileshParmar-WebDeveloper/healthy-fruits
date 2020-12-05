import "./App.css";
import Footer from "./component/footer-component/footer.component";
import Nutrition from "./component/nutrition-component/nutrition.component";
import Header from "./component/top-component/header.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Nutrition />
      <Footer />
    </div>
  );
}

export default App;
