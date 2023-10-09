import { useEffect, useRef, useState } from 'react';

import video1 from '../../../assets/videos/v1.mp4';
import video2 from '../../../assets/videos/v2.mp4';
import video3 from '../../../assets/videos/v3.mp4';

import { PulseLoader } from 'react-spinners';

function VideoPlayer({ onLoad,start }: any) {
    const videoRef1 = useRef<HTMLVideoElement | null>(null);
    const videoRef2 = useRef<HTMLVideoElement | null>(null);
    const videoRef3 = useRef<HTMLVideoElement | null>(null);
    const refs = [videoRef1, videoRef2, videoRef3];
    const [current, setCurrent] = useState<number>(0);
    const [loaded, setLoaded] = useState<number>(0);

    useEffect(() => {
        const ref = refs[current];
        if (ref.current)
            ref.current.currentTime = 0;
        onLoad(ref);
    }, [current])

    useEffect(() => {
        const ref = refs[current];
        if (ref.current)
            ref.current.currentTime = 0;
        onLoad(ref);
    },[start]);

    useEffect(() => {
        const timer = setTimeout(() => {

        },3000)

        return clearTimeout(timer);
    },[]);

    const toggleVideos = () => {
        console.log('ended video with tab:', current);
        const newCurrent = (current + 1) % 3;
        setCurrent(newCurrent);
    };

    const onVideoLoad = () => {
        setLoaded(loaded + 1);
        console.log("loaded",loaded);
    }

    return (
        <>
            {loaded? 
                <div className={`flex duration-1000 transition-all items-center overflow-hidden rounded-[10px] ${start? 'opacity-100': 'opacity-0 -translate-y-full'}`}>
                    <video
                        ref={videoRef1}
                        className={`transition-opacity duration-1000 ${current === 0 ? 'opacity-100' : 'opacity-0'}`}
                        onEnded={toggleVideos}
                        src={video1}
                    />

                    <video
                        ref={videoRef2}
                        className={`transition-all duration-1000 ${current === 1 ? 'opacity-100 -translate-x-full' : current === 2 ? '-translate-x-[200%] opacity-0' : 'opacity-0'}`}
                        onEnded={toggleVideos}
                        src={video2}
                    />

                    <video
                        ref={videoRef3}
                        className={`transition-all duration-1000 ${current === 2 ? 'opacity-100 -translate-x-[200%]' : 'opacity-0'}`}
                        onEnded={toggleVideos}
                        src={video3}
                    />
                </div>
                :
                <div className="w-full flex items-center justify-center h-full">
                    <PulseLoader color="white" size={6} />
                </div>
            }
        </>


    );
}
export default VideoPlayer;