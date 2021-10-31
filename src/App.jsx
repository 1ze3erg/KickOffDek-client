import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header/Header";
import MainContainer from "./components/layout/MainContainer";
import AppProvider from "./contexts/AppContext";
import ContentProvider from "./contexts/ContentContext";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <MainContainer>
                    <Header />
                    <ContentProvider>
                        <Content />
                    </ContentProvider>
                    <Footer />
                </MainContainer>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
