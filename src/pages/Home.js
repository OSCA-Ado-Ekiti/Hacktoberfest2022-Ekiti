import React from 'react';
import Filter from '../components/Filter';
import Card from '../components/Card';
import DevOps from '../files/devops';
import Backend from '../files/backend';
import Frontend from '../files/frontend';
import Design from '../files/design';
import ReactJson from '../files/react';
import Security from '../files/security';
import TechnicalWriting from '../files/technical-writing';

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
            filtered = Backend;
        } else if (stack === 'Frontend') {
            filtered = Frontend;
        } else if (stack === 'Design') {
            filtered = Design;
        } else if (stack === 'DevOps') {
            filtered = DevOps;
        } else if (stack === 'React') {
            filtered = ReactJson;
        } else if (stack === 'Security') {
            filtered = Security;
        } else if (stack === 'TechnicalWriting') {
            filtered = TechnicalWriting;
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
