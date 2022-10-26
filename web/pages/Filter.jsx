import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

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
        value: 'Technical Writing',
        label: 'Technical Writing',
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
        value: 'Hacktoberfest',
        label: 'Hacktoberfest',
    },
    {
        value: 'Documentation',
        label: 'Documentation',
    },
    {
        value: 'Enhancement',
        label: 'Enhancement',
    },
    {
        value: 'Bug',
        label: 'Bug',
    }
]

const Filter = () => {
    return (
        <StyledFilter>
            <div className="filter">
                <div className="dropdown-container">
                    <div className="label">
                        <label>Filter by Stack</label>
                    </div>
                    <div className="dropdown">
                        <Select options={stacks} placeholder="Select a stack" />
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className="label">
                        <label>Filter by Level</label>
                    </div>
                    <div className="dropdown">
                        <Select options={level} placeholder="Select a level" />
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className="label">
                        <label>Filter by Label</label>
                    </div>
                    <div className="dropdown">
                        <Select options={label} placeholder="Select a level" />
                    </div>
                </div>
            </div>
        </StyledFilter>
    );
};

export default Filter;

const StyledFilter = styled.div`
    .filter {
        display: flex;
        justify-content: space-between;
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