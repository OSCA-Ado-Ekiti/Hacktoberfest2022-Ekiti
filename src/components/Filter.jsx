import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const stacks = [
    {
        value: 'Design',
        label: 'Design',
    },
    {
        value: 'Frontend',
        label: 'Frontend',
    },
    {
        value: 'Backend',
        label: 'Backend',
    },
    {
        value: 'DevOps',
        label: 'DevOps',
    },
    {
        value: 'Data Science',
        label: 'Data Science',
    },
    {
        value: 'Mobile',
        label: 'Mobile',
    },
    {
        value: 'Security',
        label: 'Security',
    },
    {
        value: 'Game Dev',
        label: 'Game Dev',
    },
    {
        value: 'Security',
        label: 'Security',
    },
    {
        value: 'TechnicalWriting',
        label: 'Technical Writing',
    },
    {
        value: 'React',
        label: 'React',
    },
];

const level = [
    {
        value: 'Beginner',
        label: 'Beginner',
    },
    {
        value: 'Intermediate',
        label: 'Intermediate',
    },
    {
        value: 'Expert',
        label: 'Expert',
    },
];

const label = [
    {
        value: 'HACKTOBERFEST',
        label: 'Hacktoberfest',
    },
    {
        value: 'documentation',
        label: 'Documentation',
    },
    {
        value: 'enhancement',
        label: 'Enhancement',
    },
    {
        value: 'bug',
        label: 'Bug',
    },
];

const Filter = ({
    stackValue,
    // levelValue,
    labelValue,
    changeStack,
    //    changeLevel,
    changeLabel,
}) => {
    return (
        <StyledFilter>
            <div className="filter">
                <div className="dropdown-container">
                    <div className="label">
                        <label>Filter by Stack</label>
                    </div>
                    <div className="dropdown">
                        <Select
                            options={stacks}
                            value={stackValue}
                            onChange={changeStack}
                            placeholder="Select a stack"
                        />
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className="label">
                        <label>Filter by Level</label>
                    </div>
                    <div className="dropdown">
                        <Select
                            options={level}
                            // onChange={changeLevel}
                            // value={levelValue}
                            placeholder="Select a level"
                        />
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className="label">
                        <label>Filter by Label</label>
                    </div>
                    <div className="dropdown">
                        <Select
                            options={label}
                            onChange={changeLabel}
                            value={labelValue}
                            placeholder="Select a label"
                        />
                    </div>
                </div>
            </div>
        </StyledFilter>
    );
};

Filter.propTypes = {
    stackValue: PropTypes.object,
    levelValue: PropTypes.object,
    labelValue: PropTypes.object,
    changeStack: PropTypes.func,
    changeLevel: PropTypes.func,
    changeLabel: PropTypes.func,
};

export default Filter;

const StyledFilter = styled.div`
    padding: 1rem 5%;
    .filter {
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
            flex-wrap: wrap;
            gap: 2rem;
        }
        .dropdown-container {
            .label {
                label {
                    font-size: 1.125rem;
                    font-weight: 400;
                    color: #2d2d2d;
                    margin-bottom: 0.9375rem;
                }
            }
            .dropdown {
            }
        }
    }
`;
