import React, {useState, useCallback} from 'react';
import profileImage1 from '../../../img/profile-1.png';
import profileImage2 from '../../../img/profile-2.png';
import './HoverImage.scss';

export default () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleRowHovered = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleRowNotHovered = useCallback(() => {
        setIsHovered(false);
    }, []);

    return (
        <div onMouseLeave={handleRowNotHovered} onMouseEnter={handleRowHovered}>
            <img src={profileImage1} alt="" className={`image-hover ${isHovered ? 'image-invisible' : ''}`}/>
            <img src={profileImage2} alt="" className={`image-hover last-child ${!isHovered ? 'image-invisible' : ''}`}/>
        </div>
    );
}