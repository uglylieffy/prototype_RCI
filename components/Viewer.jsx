"use client"
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";

const Viewer = ({ data }) => {
    const Url = "https://violet-wonderful-jay-585.mypinata.cloud/ipfs/"
    const objectUrl = Url + data + "/0.glb"
    // console.log("/3d_viewer.html?data=" + objectUrl)
    const size = useWindowSize();


  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
        <div
        style={{
            display: "flex",
            width: "100%",
            height: "calc(100vh*0.75)",
            justifyContent: "flex-start",
            alignItems: "flex-start",
        }}
        >
            <iframe src={"/3d_viewer.html?data="+ objectUrl} width="100%" height="100%" frameBorder="0"></iframe>
            {/* <iframe src={"/3d_viewer.html"} ref={ref} width="100%" height="100%" frameBorder="0"></iframe> */}
        </div>

    </div>

  );
};

// Hook     
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [dimensions, setDimensions] = useState({
        height: 600,
        width: 800,
      });


    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            setDimensions({
                height: parseInt((window.innerHeight)/2),
                width: parseInt((window.innerWidth)/2)
            })
        }

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Call handler right away so state gets updated with initial window size
        handleResize()

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    return dimensions
}

export default Viewer;
