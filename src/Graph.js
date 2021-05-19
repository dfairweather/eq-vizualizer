import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";

export const Graph = ({
    stopAnimation,
    animating,
    previousConstant,
    constant,
    result,
}) => {
    console.log(animating);
    const ref = useRef();
    
   
    const [localPlaying, setLocalPlaying] = useState(animating);
    console.log(localPlaying);
    const getPixelRatio = (context) => {
        var backingStore =
            context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1;
        return (window.devicePixelRatio || 1) / backingStore;
    };

    

    useEffect(() => {
        console.log(localPlaying);
        const canvas = ref.current;
        const ctx = canvas.getContext("2d");
        const ratio = getPixelRatio(ctx);
        const width = getComputedStyle(canvas)
            .getPropertyValue("width")
            .slice(0, -2);
        const height = getComputedStyle(canvas)
            .getPropertyValue("height")
            .slice(0, -2);

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        let prevTime = 0,
        totalTime = 0,
            frame = 0,
            yPos = 0,
            rendering = true,
            requestId;

            const drawYAxis = (ctx) => {
                ctx.beginPath();
                ctx.moveTo(10, 0);
                ctx.lineTo(10, 800);
                ctx.stroke();
            };
        
            const drawXAxis = (ctx) => {
                ctx.beginPath();
                ctx.moveTo(0, 400);
                ctx.lineTo(800, 400);
                ctx.stroke();
            };
        
            const drawText = (ctx, text, yPos) => {
                ctx.font = "1em Arial";
                ctx.fillText(text, 0, yPos);
            };
        
            const handleStopAnimation = () => {
                //playing.current = false;
            };
        
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const constLine = (ctx, prev, current, multiplier, timeElapsed) => {
                const yPrev = 400 - (200 * multiplier) / prev;
                const yCurrent = 400 - (200 * multiplier) / current;
                
                const deltaY = timeElapsed / 30 || .45;
                //console.log(deltaY);

                yPos =
                    current < prev
                        ? yPos - deltaY
                        : yPos + deltaY;
                
        
                const distance = Math.abs(yPos);
        
                const totDistance = Math.abs(yCurrent - yPrev);
        
                ctx.strokeStyle = "hsl(0,0%,80%)";
        
                ctx.lineWidth = 1 
                if (multiplier == prev) {
                    ctx.strokeStyle = 'hsl(0,0%,10%)';
                    ctx.lineWidth = Math.max(3 - (frame / 25), 1.5);
                }
                if (multiplier == current) {
                    ctx.lineWidth = Math.min(1 + (frame / 25), 3);
                    ctx.strokeStyle = "hsl(0,0%,10%)";
                }
                
                
        
                ctx.beginPath();
        
                if (distance > totDistance) {
                    yPos = totDistance;
                    console.log(yPos);
                    ctx.moveTo(0, yPos + yPrev);
                    ctx.lineTo(800, yPos + yPrev);
                    ctx.stroke();
                    drawText(ctx, multiplier, yPos);
                    return false;
                }
        
                ctx.moveTo(0, yPos + yPrev);
                ctx.lineTo(800, yPos + yPrev);
                ctx.stroke();
                drawText(ctx, multiplier, yPos);
                return true;
            };
        
            const drawOne = (ctx, prev, current, frame) => {
                const yPrev = 400 - 200 / prev;
                const yCurrent = 400 - 200 / current;
                let yPos = current < prev ? yPrev - frame : yPrev + frame;
        
                const distance = Math.abs(yPos - yPrev);
        
                const totDistance = Math.abs(yCurrent - yPrev);
        
                if (distance > totDistance) {
                    yPos = yCurrent;
                }
        
                ctx.beginPath();
                ctx.moveTo(0, yPos);
                ctx.lineTo(800, yPos);
                ctx.stroke();
                drawText(ctx, 1, yPos);
            };
        
            const drawBall = (ctx, pos) => {
                ctx.beginPath();
                ctx.arc(100, pos, 20, 20, 0, 2 * Math.PI);
                ctx.fill();
            };
        
            const draw = (ctx, timeElapsed, yPos) => {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                
                drawYAxis(ctx);
                drawXAxis(ctx);
                let rendering = true;
                const rangeNums = Math.max(previousConstant, constant) * 2
                
                if (!constLine(ctx, previousConstant, constant, 1, timeElapsed, yPos)) {
                    rendering = false;
                }

                /* for (let j = 1; j <= rangeNums; j++) {
                    if (!constLine(ctx, previousConstant, constant, j, frame, yPos)) {
                        rendering = false;
                    }
                } */
        
                drawText(ctx, constant);
                drawBall(ctx, getYPos(result));
                return rendering;
            };

        
            
        const render = (t) => {
            //console.clear();
            frame += 1;
            const timeElapsed = t - prevTime;
            prevTime = t;
            //console.log('yPos: ', yPos)
            //console.log('FPS:  ', 1 / (timeElapsed / 1000));
            //console.log('ms since: ', timeElapsed);
            if (timeElapsed) {
                totalTime += timeElapsed
            }
            //console.log('aFPS:  ', frame / (totalTime / 1000));
            
            rendering = draw(ctx,  timeElapsed, yPos);
            
            //console.log('frame#, ', frame)

            if (!rendering) {
                console.log('aFPS:  ', frame / (totalTime / 1000))
                console.log('time total: ', totalTime / 1000, 'seconds')
                return;
            }

            
            requestId = requestAnimationFrame(render);
            
        };

        render();

        return () => {
            console.log(requestId)
            cancelAnimationFrame(requestId);
        };
    });

    const getYPos = (result) => {
        const pos = 400 - 200 * result;
        return pos;
    };

    return (
        <canvas
            ref={ref}
            style={{
                width: "800px",
                height: "800px",
            }}
        />
    );
};
