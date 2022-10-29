import React from 'react';
import styled from 'styled-components';
import chat from '../constants/icons/akar-icons_chat-dots.png';
import bulb from '../constants/icons/bulb.png';
import clock from '../constants/icons/clock.png';
import star from '../constants/icons/star.png';
import PropTypes from 'prop-types';

/* To make use of this card:
   1. map through with firstIssues array
   2. comment out or remove static values
   3. uncomment the divs below the static divs to fetch your values or modify to your taste.
*/

const Card = ({ title, commentNumber,  assigneeNumber, time }) => {
    return (
        <>
            <StyledCard>
                <div className="card">
                    <div className="stack-one">
                        <h6>{title}</h6>
                        {/* <div className="chat">
                            <img src={chat} alt="chat" /> 7
                        </div> */}
                        <div className="chat">
                            <img src={chat} alt="chat" /> {commentNumber}
                        </div>
                    </div>

                    <div className="stack-two">
                        <div>
                            <img src={star} alt="star" /> 70 stars
                        </div>
                        {/* <div>
                            <img src={star} alt="star" /> {starNumber}
                        </div> */}

                        {/* <div>
                            <img src={bulb} alt="assignee" /> 3 assignees
                        </div> */}
                        <div>
                            <img src={bulb} alt="assignee" /> {assigneeNumber}{' '}
                            assignees
                        </div>

                        {/* <div>
                            <img src={clock} alt="clock" /> October 13, 2022 - 3
                            hours ago
                        </div> */}
                        <div>
                            <img src={clock} alt="clock" /> {time}
                        </div>
                    </div>
                </div>
            </StyledCard>
        </>
    );
};

export default Card;

Card.propTypes = {
    title: PropTypes.string,
    commentNumber: PropTypes.string,
    assigneeNumber: PropTypes.string,
    time: PropTypes.string,
};

const StyledCard = styled.div`
    padding: 1rem 8%;
    font-family: 'Poppins', sans-serif;
    color: #000000;

    .card {
        border: 0.2px solid #010038;
        padding: 0.5rem 1.5%;

        .stack-one {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 0.5rem;

            h6 {
                font-size: 18px;
                line-height: 27px;
                font-weight: 700;
            }

            .chat {
                font-size: 14px;
                font-weight: 400;
                line-height: 21px;
            }
        }

        .stack-two {
            display: flex;
            flex-direction: row;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;

            & > div {
                margin-right: 0.5rem;
                margin-left: 0.5rem;
            }
        }
    }
`;
