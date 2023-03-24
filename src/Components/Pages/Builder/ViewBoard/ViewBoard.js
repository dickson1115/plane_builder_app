import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    TransformWrapper,
    TransformComponent,
    useControls,
} from "react-zoom-pan-pinch";
import styles from "./ViewBoard.module.css";

function ViewBoard(props) {
    const scaleUp = true;
    const zoomFactor = 8;
    const [container, setContainer] = useState(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    const [imageNaturalWidth, setImageNaturalWidth] = useState(1080);
    const [imageNaturalHeight, setImageNaturalHeight] = useState(1080);

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
            containerHeight / imageNaturalHeight
        );
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

    // useEffect(() => {
    //     const image = new Image();
    //     image.onload = () => handleImageOnLoad(image);
    //     image.src = src;
    // }, [src]);

    return (
        <div
            className={styles.view}
            ref={(el) => setContainer(el)}
        >
            {imageScale > 0 && (
                <TransformWrapper
                    //Note: 0.9 mutiplier is add due to some unknow sizing error. The height of the canvas overflow the view a little bit during initial render
                    initialScale={imageScale * 0.9}
                    minScale={imageScale / 2}
                    maxScale={imageScale * zoomFactor}
                    centerOnInit
                    disabled={props.disableCanvasDrag}
                >
                    <TransformComponent
                        key={`${containerWidth}x${containerHeight}`}
                        wrapperStyle={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {props.children}
                    </TransformComponent>
                </TransformWrapper>
            )}
        </div>
    );
}

export default ViewBoard;
