import React from 'react';
import '../style/Card.css';
import chat from '../constants/icons/akar-icons_chat-dots.png';
import bulb from '../constants/icons/bulb.png';
import clock from '../constants/icons/clock.png';
import star from '../constants/icons/star.png';

const Card = () => {
    return (
        <>
            <div className="card">
                <h6>Issue title here</h6>
                <div>
                    <img src={chat} alt="chat" />
                </div>

                <div className="flex">
                    <div>
                        <img src={star} alt="star" /> 70 stars
                    </div>
                    <div>
                        <img src={bulb} alt="asignee" /> 3 assignees
                    </div>
                    <div>
                        <img src={clock} alt="clock" /> October 13, 2022 - 3
                        hours ago
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
