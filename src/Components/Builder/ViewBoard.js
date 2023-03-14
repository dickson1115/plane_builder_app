import React, { useState, useEffect, useMemo, useCallback } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
// import BuilderCanvas from "./BuilderCanvas/BuilderCanvas";
import styles from "./ViewBoard.module.css"
import photo from './medium-image.jpg'
function ViewBoard(props) {
    const scaleUp = true;
    const zoomFactor = 8;
    const src = photo;
    const [container, setContainer] = useState(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    const [imageNaturalWidth, setImageNaturalWidth] = useState(1980);
    const [imageNaturalHeight, setImageNaturalHeight] = useState(1000);

    const [disableCanvasDrag, setDisableCanvasDrag] = useState(false);
    const handleDisableCanvasDrag = () => {
        console.log("disable")
        return setDisableCanvasDrag(true)
    }
    const handleEnableCanvasDrag = () => {
        console.log("enable")
        setDisableCanvasDrag(false)
    }

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
    const handleResize = useCallback(() => {
        // console.log(container.getBoundingClientRect())
        if (container !== null) {
            const rect = container.getBoundingClientRect();
            setContainerWidth(rect.width);
            setContainerHeight(rect.height);
        } else {
            setContainerWidth(0);
            setContainerHeight(0);
        }
    }, [container]);

    useEffect(() => {
        handleResize();
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
        const image = new Image();
        image.onload = () => handleImageOnLoad(image);
        image.src = src;
    }, [src]);

    return (

        <div className={styles.view} 
            // style={{
            //     width: "80vw",
            //     height: "80vh",
            // }}
            ref={(el) => setContainer(el)
            }>
            {imageScale > 0 && (<TransformWrapper

                initialScale={imageScale}
                minScale={imageScale / 2}
                maxScale={imageScale * zoomFactor}
                centerOnInit
                disabled={disableCanvasDrag}
            >

                <TransformComponent
                    key={`${containerWidth}x${containerHeight}`}
                    wrapperStyle={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {/* <img src={src} /> */}

                    {
                        React.Children.map(props.children, (child) => {
                            return React.cloneElement(child, {
                                onMouseDownCapture: handleDisableCanvasDrag,
                                onMouseUpCapture: handleEnableCanvasDrag,
                            })
                        })
                    }
                </TransformComponent>
            </TransformWrapper>
            )}
        </div >
    )
}


export default ViewBoard