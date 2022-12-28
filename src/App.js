import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className=" flex items-center justify-center h-screen">
        <h1>Hello world</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
