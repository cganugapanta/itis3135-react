import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";
import About from "./pages/About";

function App() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/introduction" element={<Introduction />} />
                    <Route path="/contract" element={<Contract />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default App;