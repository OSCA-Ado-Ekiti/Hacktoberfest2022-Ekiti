import React from 'react';
import Filter from '../components/Filter';
import Card from '../components/Card';
import { devOpsIssues } from '../issues/devOps';
import { backendIssues } from '../issues/backend';
import { frontendIssues } from '../issues/frontend';
import { designIssues } from '../issues/design';
import { reactIssues } from '../issues/react';
import { securityIssues } from '../issues/security';
import { technicalWritingIssues } from '../issues/technicalWriting';

const Home = () => {
    const [stack, setStack] = React.useState(' ');
    const [label, setLabel] = React.useState(' ');
    // const [level, setLevel] = React.useState(' ');

    const handleStack = selectedValue => {
        setStack(selectedValue.value);
    };
    const handleLabel = selectedValue => {
        setLabel(selectedValue.value);
    };
    // const handleLevel = selectedValue => {
    //     setLevel(selectedValue.value);
    // };

    //filter function
    const filter = (stack, label) => {
        let filtered = [];
        if (stack === 'Backend') {
            filtered = backendIssues;
        } else if (stack === 'Frontend') {
            filtered = frontendIssues;
        } else if (stack === 'Design') {
            filtered = designIssues;
        } else if (stack === 'DevOps') {
            filtered = devOpsIssues;
        } else if (stack === 'React') {
            filtered = reactIssues;
        } else if (stack === 'Security') {
            filtered = securityIssues;
        } else if (stack === 'TechnicalWriting') {
            filtered = technicalWritingIssues;
        }
        if (label !== ' ') {
            filtered = filtered.filter(issue =>
                issue?.labels.map(label => label?.name).includes(label)
            );
            // filtered = filtered.filter(item => item.label === label);
        }
        // if (level !== ' ') {
        //     filtered = filtered.filter(item => item.level === level);
        // }
        return filtered;
    };

    return (
        <>
            <Filter
                stackValue={stack}
                labelValue={label}
                // levelValue={level}
                changeLabel={handleLabel}
                // changeLevel={handleLevel}
                changeStack={handleStack}
            />
            {filter(stack, label).map((item, index) => (
                <Card
                    key={index}
                    assigneeNumber={item?.assignees}
                    commentNumber={item?.comments}
                    title={item?.title}
                    time={item?.created_at}
                />
            ))}
        </>
    );
};
export default Home;
