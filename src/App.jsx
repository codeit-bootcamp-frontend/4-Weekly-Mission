import ProfileContextProvider from "context/ProfileContext"
import ShareContextProvider from "context/ShareContext"
import Footer from "components/common/footer/Footer"
import Header from "components/common/header/Header"
import ShareBody from "components/share/ShareBody"
import ShareHeader from "components/share/ShareHeader"
import GlobalStyle from "styles/Global.style"

function App() {
  return (
    <>
      <ProfileContextProvider>
        <ShareContextProvider>
          <GlobalStyle />
          <Header />
          <main>
            <ShareHeader />
            <ShareBody />
          </main>
          <Footer />
        </ShareContextProvider>
      </ProfileContextProvider>
    </>
  )
}

export default App
