import React from 'react'
import './tools.css';

import InstallVSC from './img/install_vsc.png';
import InitialVSC from './img/initial_vsc.png';
import Extensions from './img/extensions_vsc.png';
import LiveServerVSC from './img/liveserver_vsc.png';
import Footer from '../components/Footer';

function Tools() {
    return (
        <>
            <div className='wrapper tools'>
                <h1>Required Tool: Visual Studio Code and Extensions</h1>
                <h3>1. Go to VSC official website</h3>
                <h4>Press <a href="https://code.visualstudio.com/" title="Link to VSC Website">here</a> or go to this link https://code.visualstudio.com/</h4>
                <h3>2. Press this button and download <u>stable</u> version for your machine</h3>
                <img src={InstallVSC} alt="Install VSC instructions" />
                <h3>3. Wait until download finishes</h3>
                <h3>4. Once download finishes, press OKAY or YES to everything. Wait until it finishes installing</h3>
                <h3>5. Your Visual Studio Code should look like this upon finishing installing.</h3>
                <img src={InitialVSC} alt="Initial VSC display" />
                <h3>6. Press extensions and download 'Live Server' exteinsion.</h3>
                <img src={Extensions} alt="Press Extension Tab" />
                <h5>Mine looks slightly different, however there will be an 'install button' below the description.</h5>
                <img src={LiveServerVSC} alt="Download Live Server Extension" />
                <h3>You're set! If you have any questions don't hesitate to ask in discord channel.</h3>
            </div>
            <Footer />
        </>
    )
}

export default Tools;