import { useState, useEffect } from "react";

export default function useGetVideo(url) {
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch data");
            }
            return res.json();
        })
        .then(data => {
            setVideoData(data.results[0]);
        })
        .catch(err => {
            console.log(err.message)
        })

    },[url]);
    
    return videoData
}