/* import React from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";

const VideoConference = () => {
  const roomName = "my-room";

  return (
    <JaaSMeeting roomName={roomName} />
  );
};

const App = () => {
  return (
    <VideoConference />
  );
};

export default App; */

import { JaaSMeeting } from '@jitsi/react-sdk';
import React, { useState } from 'react';

const App = () => {
    //const apiRef = useRef();
    //const [ logItems, updateLog ] = useState([]);
    const [ showNew ] = useState(false);
    //const [ knockingParticipants, updateKnockingParticipants ] = useState([]);
/* 
    const printEventOutput = payload => {
        updateLog(items => [ ...items, JSON.stringify(payload) ]);
    };
 */
   /*  const handleAudioStatusChange = (payload, feature) => {
        if (payload.muted) {
            updateLog(items => [ ...items, `${feature} off` ])
        } else {
            updateLog(items => [ ...items, `${feature} on` ])
        }
    };

    const handleChatUpdates = payload => {
        if (payload.isOpen || !payload.unreadCount) {
            return;
        }
        apiRef.current.executeCommand('toggleChat');
        updateLog(items => [ ...items, `you have ${payload.unreadCount} unread messages` ])
    }; */

    /* const handleKnockingParticipant = payload => {
        updateLog(items => [ ...items, JSON.stringify(payload) ]);
        updateKnockingParticipants(participants => [ ...participants, payload?.participant ])
    };
 */
    /* const resolveKnockingParticipants = condition => {
        knockingParticipants.forEach(participant => {
            apiRef.current.executeCommand('answerKnockingParticipant', participant?.id, condition(participant));
            updateKnockingParticipants(participants => participants.filter(item => item.id === participant.id));
        });
    };
 */
    /* const handleJitsiIFrameRef1 = iframeRef => {
        iframeRef.style.border = '10px solid #3d3d3d';
        iframeRef.style.background = '#3d3d3d';
        iframeRef.style.height = '400px';
        iframeRef.style.marginBottom = '20px';
    }; */

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

    //const handleApiReady = apiObj => {
        //apiRef.current = apiObj;
       // apiRef.current.on('knockingParticipant', handleKnockingParticipant);
        //apiRef.current.on('audioMuteStatusChanged', payload => handleAudioStatusChange(payload, 'audio'));
       // apiRef.current.on('videoMuteStatusChanged', payload => handleAudioStatusChange(payload, 'video'));
        //apiRef.current.on('raiseHandUpdated', printEventOutput);
        //apiRef.current.on('titleViewChanged', printEventOutput);
       // apiRef.current.on('chatUpdated', handleChatUpdates);
       // apiRef.current.on('knockingParticipant', handleKnockingParticipant);
   // };

    //const handleReadyToClose = () => {
        /* eslint-disable-next-line no-alert */
       // alert('Ready to close...');
    //};

    //const generateRoomName = () => `CelloRomm${Math.random() * 100}-${Date.now()}`;

    // Multiple instances demo
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

   /* 
    const renderLog = () => logItems.map(
        (item, index) => (
            <div
                style = {{
                    fontFamily: 'monospace',
                    padding: '5px'
                }}
                key = { index }>
                {item}
            </div>
        )
    );
 */
   /*  const renderSpinner = () => (
        <div style = {{
            fontFamily: 'sans-serif',
            textAlign: 'center'
        }}>
            Loading..
        </div>
    );
 */

    return (
        <>
            <h1 style = {{
                fontFamily: 'sans-serif',
                textAlign: 'center'
            }}>
                Jacqueline Taylor & Friends
            </h1>
           {/*  <JitsiMeeting
                roomName = { generateRoomName() }
                spinner = { renderSpinner }
                configOverwrite = {{
                    subject: 'lalalala',
                    hideConferenceSubject: false
                }}
                lang = ''
                onApiReady = { externalApi => handleApiReady(externalApi) }
                onReadyToClose = { handleReadyToClose }
                getIFrameRef = { handleJitsiIFrameRef1 } /> */}
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
            {/* {renderButtons()} */}
            {renderNewInstance()}
            {/* {renderLog()} */}
        </>
    );
};

export default App;