import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <StyledAbout>
            <div className="about-content">
                <h1>
                    Good First Issues empowers first-time contributors of
                    open-source software
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    nibh cursus feugiat non neque libero. Sit dictum quis et in
                    suspendisse pulvinar. Risus sed sit a sed ac, venenatis
                    etiam. Massa tincidunt commodo molestie cras placerat tellus
                    adipiscing mollis nunc.
                </p>
            </div>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    padding: 6rem 25%;
    @media (max-width: 768px) {
        padding: 3rem 5.5%;
    }
    .about-content {
        h1 {
            text-align: center;
            font-weight: 600;
            font-size: 1.770625rem;
            line-height: 2.65625rem;
            margin-bottom: 4.0625rem;

            @media (max-width: 768px) {
                font-size: 1.3rem;
                line-height: 2.25rem;
                margin-bottom: 2.5rem;
            }
        }
        p {
            text-align: center;
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.6875rem;

            @media (max-width: 768px) {
                font-size: 0.9rem;
                line-height: 1.5rem;
            }
        }
    }
`;

export default About;
