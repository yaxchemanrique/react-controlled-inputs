import Header from "./layout/Header/Header";
import Content from './layout/Content.mdx'

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Content />
      </main>
    </>
  );
}

export default App;
