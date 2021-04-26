import * as React from 'react';
import './style.scss';

type headLinesProps = {
    staticsData: globalDataObject;
}
 
type globalDataObject = {
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}
const CoronaHeadLines = (props: headLinesProps) => {
    const { staticsData: { TotalConfirmed, TotalDeaths, TotalRecovered } = {} } = props;
    return (
        <div className="global-counter">
            <div className="global-counter__main-counter-wrap">
                <h1>Coronavirus Cases:</h1>
                <div className="global-counter__main-counter-number">
                    <span className="global-counter__total-cases">{TotalConfirmed}</span>

                </div>
            </div>
            <div className="global-counter__main-counter-wrap">
                <h1>Deaths:</h1>
                <div className="global-counter__main-counter-number">

                    <span>{TotalDeaths}</span>
                </div>
            </div>
            <div className="global-counter__main-counter-wrap">
                <h1>Recovered:</h1>
                <div className="global-counter__main-counter-number recovered">
                    <span>{TotalRecovered}</span>
                </div>
            </div>
        </div>
    )
}

export type { globalDataObject }; // exported types  
export default CoronaHeadLines;
