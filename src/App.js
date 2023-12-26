// Jisi As A Service using react sdk

import { JaaSMeeting } from '@jitsi/react-sdk';
import React, { useState } from 'react';

const App = () => {
    
    const [ showNew ] = useState(false);

    const handleJitsiIFrameRef2 = iframeRef => {
        iframeRef.style.marginTop = '10px';
        iframeRef.style.border = '10px dashed #df486f';
        iframeRef.style.padding = '5px';
        iframeRef.style.height = '500px';
    };

    const handleJaaSIFrameRef = iframeRef => {
        iframeRef.style.border = '10px solid #3d3d3d';
        iframeRef.style.background = '#3d3d3d';
        iframeRef.style.height = '400px';
        iframeRef.style.marginBottom = '20px';
    };


    // return instance
    const renderNewInstance = () => {
        if (!showNew) {
            return null;
        }

        return (
            <JaaSMeeting
                roomName = { 'Cello with Jacqueline' }
                getIFrameRef = { handleJitsiIFrameRef2 } />
        );
    };

   

    return (
        <>
            <h1 style = {{
                fontFamily: 'sans-serif',
                textAlign: 'center'
            }}>
                Jacqueline Taylor & Friends
            </h1>
         {/* render a meeting with Jitsi */}
            <JaaSMeeting
                appId = { 'vpaas-magic-cookie-d4ea19dabd194f1e803df5dac4ada499' }
                roomName = { 'CelloRoom' }

                // Update this with the `8x8.vc` or `stage.8x8.vc` version of interest
                // and avoid mixing up different domains and release versions
                // on the same page at the same time, as only the first
                // external api script will be loaded.
                // release = 'release-1234'

               // useStaging = { true }
                getIFrameRef = { handleJaaSIFrameRef } />
        
            {renderNewInstance()}
         
        </>
    );
};

export default App;