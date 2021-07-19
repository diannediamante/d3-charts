import React, { useRef, useEffect } from 'react'
import { select } from 'd3';
import useResizeObserver from './useResizeObserver';

function GeoChart({data, property}) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    useEffect(() => {
        const svg = select(svgRef.current);

        //use resized dimensions
        //but fallback to getBoundingClientRect, if no dimensions yet
        const { width, height } =
            dimensions || wrapperRef.current.getBoundingClientRect();
    }, [data, dimensions, property]);

    return (
        <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
            <svg ref={svgRef}></svg>
            
        </div>
    )
}

export default GeoChart
