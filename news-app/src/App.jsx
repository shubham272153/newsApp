import Navbar from "./Components/Navbar";
import NewsBoards from "./Components/NewsBoards";
import NewsItem from "./Components/NewsItem";
import { useState } from "react";
import Footer from "./Components/Footer";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoards cotegory={category} />
      <NewsItem />
      <Footer />
    </div>
  );
};

export default App;
