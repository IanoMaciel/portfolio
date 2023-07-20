import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

// views
import About from "./views/about";

const App: React.FC = () => {
        return (
                <>
                        <GlobalStyles />
                        <About />
                </>
        );
};

export default App;
