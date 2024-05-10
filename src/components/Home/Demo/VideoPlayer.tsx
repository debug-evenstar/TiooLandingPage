import { useEffect, useRef, useState } from 'react';

import video1 from '../../../assets/videos/main-1.mp4';
import video2 from '../../../assets/videos/main-2.mp4';

import { PulseLoader } from 'react-spinners';

function VideoPlayer() {
    const videoRef1 = useRef<HTMLVideoElement | null>(null);
    const videoRef2 = useRef<HTMLVideoElement | null>(null);
    const [current, setCurrent] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const refs = [videoRef1, videoRef2];
        const videos = document.querySelectorAll('video');    
        videos[videos.length - 1].addEventListener('canplaythrough', () => {
            setLoaded(true);
        })
        const ref = refs[current];
        try {
            if (ref.current) {
                ref.current.currentTime = 0;
                ref.current.play();
            }
        } catch (error) {
            // console.log(error)
        }

    }, [current])


    const toggleVideos = () => {
        const newCurrent = (current + 1) % 2;
        setCurrent(newCurrent);
    };


    return (
        <>

            <div className={`${loaded ? '' : 'hidden'} flex duration-1000 w-full transition-all items-center overflow-hidden rounded-[10px]`}>
                <video
                    autoPlay muted
                    ref={videoRef1}
                    className={`transition-all w-full duration-1000 ${current === 0 ? 'opacity-100' : 'opacity-0'}`}
                    onEnded={toggleVideos}
                    src={video1}
                />

                <video
                    autoPlay muted
                    ref={videoRef2}
                    className={`transition-all w-full duration-1000 ${current === 1 ? 'opacity-100 -translate-x-full' : current === 2 ? '-translate-x-[200%] opacity-0' : 'opacity-0'}`}
                    onEnded={toggleVideos}
                    src={video2}
                />

            </div>
            <div className={`${!loaded ? '' : 'hidden'} w-full flex items-center justify-center h-full`}>
                <PulseLoader color="white" size={6} />
            </div>
        </>


    );
}
export default VideoPlayer;