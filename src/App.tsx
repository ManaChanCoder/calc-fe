import "./app.css";

// components
import Calculator from "./components/Calculator";

// store
import { themeStore } from "./store/themeStore";

const App = () => {
  const isDark = themeStore((state) => state.isDark);

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        isDark ? "bg-purple-950" : "bg-white"
      }`}
    >
      <Calculator />
    </div>
  );
};

export default App;
