import React, {useState, useEffect, useContext} from "react";
const Graph = ()=> {
 // @ts-ignore
    return <>
        <div className="taboolaGraph__responsive-graph-container___68A_j">
            <div className="recharts-responsive-container" style={{width: '95%', height: '60%'}}><div className="recharts-wrapper" style={{position: 'relative', cursor: 'default', width: '600px', height: '299px'}}>
                <svg className="recharts-surface" width={600} height={299} viewBox="0 0 700 299" version="1.1">
                    <defs>
                        <clipPath id="recharts1-clip">
                            <rect x={65} y={5} height={259} width={776} />
                        </clipPath>
                    </defs>
                    <g className="recharts-cartesian-grid">
                        <g className="recharts-cartesian-grid-horizontal">
                            <line stroke="#D4D9DF" x={65} y={5} width={400} height={259} fill="none" x1={65} y1={264} x2={841} y2={264} />
                            <line stroke="#D4D9DF" x={65} y={5}  width={400} height={259} fill="none" x1={65} y1="199.25" x2={841} y2="199.25" />
                            <line stroke="#D4D9DF" x={65} y={5}  width={400}  height={259} fill="none" x1={65} y1="134.5" x2={841} y2="134.5" />
                            <line stroke="#D4D9DF" x={65} y={5}  width={400}  height={259} fill="none" x1={65} y1="69.75" x2={841} y2="69.75" />
                            <line stroke="#D4D9DF" x={65} y={5}  width={400}  height={259} fill="none" x1={65} y1={5} x2={841} y2={5} />
                        </g>
                    </g>
                    <g className="recharts-layer recharts-bar">
                        <g className="recharts-layer recharts-bar-rectangles">
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M150,264 L150,14.573591666666651 L152,12.573591666666651 L160,12.573591666666651 L162,14.573591666666651 L162,264 Z" fill="#b5587e" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M334,264 L334,233.70485833333333 L336,231.70485833333333 L344,231.70485833333333 L346,233.70485833333333 L346,264 Z" fill="#b5587e" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M518,264 L520,262 L528,262 L530,264 Z" fill="#b5587e" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M702,264 L704,262 L712,262 L714,264 Z" fill="#b5587e" />
                            </g>
                        </g>
                    </g>
                    <g className="recharts-layer recharts-bar">
                        <g className="recharts-layer recharts-bar-rectangles">
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M164,264 L164,7.235454545454533 L166,5.235454545454533 L174,5.235454545454533 L176,7.235454545454533 L176,264 Z" fill="#4d86ec" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M348,264 L348,222.55863636363637 L350,220.55863636363637 L358,220.55863636363637 L360,222.55863636363637 L360,264 Z" fill="#4d86ec" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M532,264 L534,262 L542,262 L544,264 Z" fill="#4d86ec" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M716,264 L718,262 L726,262 L728,264 Z" fill="#4d86ec" />
                            </g>
                        </g>
                    </g>
                    <g className="recharts-layer recharts-bar">
                        <g className="recharts-layer recharts-bar-rectangles">
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M178,264 L178,37.21666666666665 L180,35.21666666666665 L188,35.21666666666665 L190,37.21666666666665 L190,264 Z" fill="#f39624" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M362,264 L362,90.74333333333333 L364,88.74333333333333 L372,88.74333333333333 L374,90.74333333333333 L374,264 Z" fill="#f39624" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M546,264 L548,262 L556,262 L558,264 Z" fill="#f39624" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M730,264 L732,262 L740,262 L742,264 Z" fill="#f39624" />
                            </g>
                        </g>
                    </g>
                    <g className="recharts-layer recharts-bar">
                        <g className="recharts-layer recharts-bar-rectangles">
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M192,264 L192,13.05875975696255 L194,11.05875975696255 L202,11.05875975696255 L204,13.05875975696255 L204,264 Z" fill="#00cb84" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M376,264 L376,94.53221378976262 L378,92.53221378976262 L386,92.53221378976262 L388,94.53221378976262 L388,264 Z" fill="#00cb84" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M560,264 L562,262 L570,262 L572,264 Z" fill="#00cb84" />
                            </g>
                            <g className="recharts-layer recharts-bar-rectangle">
                                <path d="M744,264 L746,262 L754,262 L756,264 Z" fill="#00cb84" />
                            </g>
                        </g>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                        <line className="recharts-cartesian-axis-line" stroke="#b5587e" strokeWidth={2} width={60} height={259} x={5} y={5} fill="none" x1={65} y1={5} x2={65} y2={264} />
                        <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={57} y={264} fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                                    <tspan x={57} dy="0.355em">€0.00</tspan>
                                </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={57} y="199.25" fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                                    <tspan x={57} dy="0.355em">€300.00</tspan>
                                </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={57} y="134.5" fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                                    <tspan x={57} dy="0.355em">€600.00</tspan>
                                </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={57} y="69.75" fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                                    <tspan x={57} dy="0.355em">€900.00</tspan>
                                </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={57} y={8} fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                                    <tspan x={57} dy="0.355em">€1.2K</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                        <line className="recharts-cartesian-axis-line" stroke="#4d86ec" strokeWidth={2} width={60} height={259} x={841} y={5} fill="none" x1={841} y1={5} x2={841} y2={264} />
                        <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={849} y={264} fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="start">
                                    <tspan x={849} dy="0.355em">0</tspan>
                                </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={849} y="199.25" fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="start">
                                    <tspan x={849} dy="0.355em">550</tspan>
                                </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={849} y="134.5" fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="start">
                                    <tspan x={849} dy="0.355em">1.1K</tspan>
                                </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={849} y="69.75" fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="start">
                                    <tspan x={849} dy="0.355em">1.65K</tspan>
                                </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <text stroke="none" strokeWidth={2} width={60} height={259} x={849} y={8} fill="#667686" fontSize="0.7rem" 

fontFamily="&quot;Roboto&quot;, &quot;Open Sans&quot;, Arial, sans-serif" fontWeight={500} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="start">
                                    <tspan x={849} dy="0.355em">2.2K</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                        <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <g transform="translate(177,280)">
                                    <foreignObject x="-9.375%" y={-10} dy={0} width="18.75%" height={30}>
                                        <div className="longTextTick_tick-container__IYwdN">
                                            <div className="longTextTick_tick-label__G64Dj">Why Millennials Are Using Their Phones To Learn A Language In 3 Weeks</div>
                                            <div className="tooltip-source" /></div>
                                    </foreignObject>
                                </g>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                                <g transform="translate(361,280)">
                                    <foreignObject x="-9.375%" y={-10} dy={0} width="18.75%" height={30}>
                                        <div className="longTextTick_tick-container__IYwdN">
                                            <div className="longTextTick_tick-label__G64Dj">Why Millennials Are Using Their Phones To Learn A Language In 3 Weeks</div>
                                            <div className="tooltip-source" /></div>
                                    </foreignObject>
                                </g>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(545,280)"><foreignObject x="-9.375%" y={-10} dy={0} width="18.75%" height={30}><div className="longTextTick_tick-container__IYwdN"><div className="longTextTick_tick-label__G64Dj">Why Millennials Are Using Their Phones To Learn A Language In 3 Weeks</div><div className="tooltip-source" /></div></foreignObject></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(729,280)"><foreignObject x="-9.375%" y={-10} dy={0} width="18.75%" height={30}><div className="longTextTick_tick-container__IYwdN"><div className="longTextTick_tick-label__G64Dj">5 reasons why should learn a new language with Babbel </div><div className="tooltip-source" /></div></foreignObject></g></g>
                        </g>
                    </g>
                </svg>
                <div className="recharts-tooltip-wrapper" style={{pointerEvents: 'none', visibility: 'hidden', position: 'absolute', top: '0px'}} /></div><div style={{position: 'absolute', width: '0px', height: '0px', visibility: 'hidden', display: 'none'}} /></div></div>         </>
}

export default  Graph