import { useState } from "react";
import Footer from "./Footer";
import Options from "./Options";

function Wrapper({ materials, slides, quiz, homework }) {
    const [currentPressed, setCurrentPressed] = useState(0);
    return (
        <div id='wrapper'>
            <div className='wrapper'>
                <Options currentPressed={currentPressed} setCurrentPressed={setCurrentPressed} />
                <div className='wrapper children'>
                    {
                        currentPressed === 0
                            ? materials
                            : currentPressed === 1
                                ? slides
                                : currentPressed === 2
                                    ? quiz
                                    : homework
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wrapper