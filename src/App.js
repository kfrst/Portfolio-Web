import { LanguageContextProvider } from "./components/context/languageContext"
import { Header } from "./components/header"
import { Home } from "./components/home/home"
import { Resume } from "./components/resume/resume"
import { Portfolio } from "./components/portfolio/portfolio"
import { Footer } from "./components/contact/footer"
import { ScrollUp } from "./components/scrollUp"

function App() {
  return (
    <LanguageContextProvider>
      <div className="App">
        <ScrollUp />
        <Header />
        <Home />
        <Resume />
        <Portfolio />
        <Footer />
      </div>
    </LanguageContextProvider>
  )
}

export default App
