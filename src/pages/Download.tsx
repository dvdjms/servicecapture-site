import React, { useEffect } from 'react';
import { DownloadSection } from '../components/DownloadSection';


export const Download: React.FC = () => {

    useEffect(() => {
        const ua = navigator.userAgent;

        const isAndroid = /android/i.test(ua);
        const isIOS =
            /iPhone|iPad|iPod/.test(ua) ||
            (navigator.userAgent.includes("Mac") && navigator.maxTouchPoints > 1);
        
        const timer = setTimeout(() => {
            if (isAndroid) {
                window.location.replace("https://play.google.com/store/apps/details?id=com.servicecapture.app");
            } else if (isIOS) {
                window.location.replace("https://apps.apple.com/app/6760407010");
            }
        }, 150);

        return () => clearTimeout(timer);
    }, []);


    return <DownloadSection mode={'fallback'} />;
};