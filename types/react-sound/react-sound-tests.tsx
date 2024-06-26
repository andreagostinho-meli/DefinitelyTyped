import * as React from "react";
import ReactSound from "react-sound";

const ReactSoundRequiredOptions: React.JSX.Element = (
    <ReactSound
        url="http://test.com"
        playStatus="STOPPED"
    />
);

const callbackFn = () => ({});

const ReactSoundAllOptions: React.JSX.Element = (
    <ReactSound
        url="http://test.com/audio.mp3"
        playStatus="PAUSED"
        playFromPosition={0}
        position={0}
        volume={0}
        playbackRate={0}
        autoLoad
        loop={false}
        onError={callbackFn}
        onLoading={callbackFn}
        onLoad={callbackFn}
        onPlaying={callbackFn}
        onPause={callbackFn}
        onResume={callbackFn}
        onStop={callbackFn}
        onFinishedPlaying={callbackFn}
        onBufferChange={callbackFn}
    />
);
