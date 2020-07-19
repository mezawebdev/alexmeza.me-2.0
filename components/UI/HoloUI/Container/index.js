import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function HoloUIContainer(props) {
    const [points, setPoints] = useState([]),
          [width, setWidth] = useState(0),
          [height, setHeight] = useState(0),
          borderOffset = 2;

    useEffect(() => {
        setPoints([
            { x: borderOffset, y: borderOffset + 25 },
            { x: 25, y: borderOffset },
            { x: (props.width + borderOffset) - 10, y: borderOffset},
            { x: props.width - borderOffset, y: borderOffset + 7 },
            { x: props.width - borderOffset, y: (props.height - borderOffset) - 35 },
            { x: (props.width - borderOffset) - 35, y: props.height - borderOffset },
            { x: borderOffset + 7, y: props.height - borderOffset },
            { x: borderOffset, y: (props.height - borderOffset) - 7 }
        ]);
    }, [props.width, props.height]);

    return (
        <div>
            <svg
                width={ width }
                height={ height }
                className="holo-ui-container" 
                xmlns="http://www.w3.org/2000/svg">
                <polygon 
                    className="background"
                    fill="#03171E"
                    fill-opacity="0.9"
                    stroke-width="2"
                    stroke="#73BCCD"
                    points={   
                        points.map((point, index) => {
                            return (
                                `${ point.x },${ point.y } `
                            );
                        }).join("")
                    } />
            </svg>
        </div>
    );
}
