import Widget from "./components/Widget";
import { ChatTeardropDots } from "phosphor-react";

function App() {
  return (
    <button className="bg-brand-500 rounded-full px-3 h-12 text-white">
      <ChatTeardropDots className="w-6 h-6" />
    </button>
  );
}

export default App;
