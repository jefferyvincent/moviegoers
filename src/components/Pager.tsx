import React, {useContext} from 'react';

import Context from '../Context';
import './Pager.css';

interface PagerProps {
    page: number;
    max: number;
    history: any;
}

const Pager: React.FC<PagerProps> = ({page, max, history}) => {
    const dispatch:any = useContext(Context);

    const scrollTop = ():void => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const pageNext = ():void => {
        if (page <= max ) {
            
            page++

            dispatch({
                type: 'updatePage',
                payload: page 
            });

            scrollTop();
            history.push('/movies/'+page);
        }
    }

    const pagePrev = ():void => {
        if (page >= 1) {
            page--;

            dispatch({
                type: 'updatePage',
                payload: page
            });

            scrollTop();
            history.push('/movies/'+page);
        }
    }

    let prevClass = 'prev-btn btn';
    let nextClass = 'next-btn btn';

    if (page <= 1) {
        prevClass = prevClass + " disabled";
    }

    if (page >= max) {
        nextClass = nextClass + " disabled";
    }

    if (max > 0) {
        return (
            <div className="pager">
                <span className={prevClass} onClick={()=>{pagePrev()}}>
                    Previous
                </span>
                <span className={nextClass} onClick={()=>{pageNext()}}>
                    Next
                </span>
            </div>
        )
    } else {
        return null;
    }
}

export default Pager;