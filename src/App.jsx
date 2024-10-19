import Header from "./layout/Header/Header";
import Content from "./Content.mdx";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
