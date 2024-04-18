import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )

}
