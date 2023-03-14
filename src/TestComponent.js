import React, { useState, useEffect, useMemo, useCallback } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import exampleImg from "./medium-image.jpg";
function TestComponent(args) {
    const src = exampleImg;
    const alt = "example";
    const backgroundColor = "black";
    const scaleUp = true;
    const zoomFactor = 8;

    const [container, setContainer] = useState(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    const [imageNaturalWidth, setImageNaturalWidth] = useState(0);
    const [imageNaturalHeight, setImageNaturalHeight] = useState(0);

    // const { setTransform } = useControls();
    const imageScale = useMemo(() => {
        if (
            containerWidth === 0 ||
            containerHeight === 0 ||
            imageNaturalWidth === 0 ||
            imageNaturalHeight === 0
        )
            return 0;
        const scale = Math.min(
            containerWidth / imageNaturalWidth,
            containerHeight / imageNaturalHeight,
        );
        console.log(scale)

        return scaleUp ? scale : Math.max(scale, 1);
    }, [
        scaleUp,
        containerWidth,
        containerHeight,
        imageNaturalWidth,
        imageNaturalHeight,
    ]);
    // const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
    //     <>
    //         <button onClick={() => zoomIn()}>+</button>
    //         <button onClick={() => zoomOut()}>-</button>
    //         <button onClick={() => resetTransform()}>x</button>
    //     </>
    // );
    const handleResize = useCallback(() => {
        console.log("container" + container);
        if (container !== null) {
            const rect = container.getBoundingClientRect();
            // console.log(rect.width);
            setContainerWidth(rect.width);
            setContainerHeight(rect.height);
        } else {
            setContainerWidth(0);
            setContainerHeight(0);
        }
    }, [container]);

    useEffect(() => {
        handleResize();
        // resetTransform();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    const handleImageOnLoad = (image) => {
        setImageNaturalWidth(image.naturalWidth);
        setImageNaturalHeight(image.naturalHeight);
    };

    useEffect(() => {
        console.log("src" + src)
        const image = new Image();
        image.onload = () => handleImageOnLoad(image);
        image.src = src;
    }, [src]);

    return (

        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor,
            }}
            ref={(el) => setContainer(el)}
        >
            {console.log("test2 " + imageScale)}

            {imageScale > 0 && (<TransformWrapper
                initialScale={imageScale}
                minScale={imageScale}
                maxScale={imageScale * zoomFactor}
                centerOnInit
            >

                {/* {
                    (utils) => (

                        <React.Fragment> */}
                            {/* {console.log("test")}
                            <Controls {...utils} /> */}
                            <TransformComponent
                                key={`${containerWidth}x${containerHeight}`}
                                wrapperStyle={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                {/* <svg fill="currentColor" height={imageNaturalHeight} width={imageNaturalWidth} viewBox="0 0 30 30" style={{ backgroundColor: "red", width: { imageNaturalWidth } + "px", height: { imageNaturalHeight } + "px" }}>
                        <path d="M22,4h-2v6c0,0.552-0.448,1-1,1h-9c-0.552,0-1-0.448-1-1V4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18  c1.105,0,2-0.895,2-2V8L22,4z M22,24H8v-6c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2V24z" />
                        <rect height="5" width="2" x="16" y="4" />
                    </svg> */}
                                <img alt={alt} src={src} />
                                {/* <div>test</div> */}
                            </TransformComponent>
                        {/* </React.Fragment>)} */}
            </TransformWrapper>

            )}

        </div>

    )
}

export default TestComponent