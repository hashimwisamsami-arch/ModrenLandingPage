import MainComp from "./components/MainComp";
import { LanguageProvider } from "./context/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <MainComp />
    </LanguageProvider>
  );
}

export default App;
