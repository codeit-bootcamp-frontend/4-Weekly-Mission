import ProfileContextProvider from "./context/ProfileContext"
import ShareContextProvider from "./context/ShareContext"
import Footer from "./components/common/footer/Footer"
import Header from "./components/common/header/Header"
import ShareBody from "./components/share/ShareBody"
import ShareHeader from "./components/share/ShareHeader"
import { useState } from "react"

function App() {
  const [marginTop, setMarginTop] = useState(0)

  return (
    <ProfileContextProvider>
      <ShareContextProvider>
        <Header setMarginTop={setMarginTop} />
        <main style={{ marginTop: marginTop + "px" }}>
          <ShareHeader />
          <ShareBody />
        </main>
        <Footer />
      </ShareContextProvider>
    </ProfileContextProvider>
  )
}

export default App
