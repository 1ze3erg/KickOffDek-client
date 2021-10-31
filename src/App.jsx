import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppProvider from "./contexts/AppContext";
import ContentProvider from "./contexts/ContentContext";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Header />
                <ContentProvider>
                    <Content />
                </ContentProvider>
                <Footer />
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
