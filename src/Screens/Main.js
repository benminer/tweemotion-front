import Main from '../Components/Main';

// import { componentDidUpdate } from 'react-functional-lifecycle';
import { compose, withState, withHandlers } from 'recompose';
import { curry } from 'ramda';

const toggleChart = curry((props, _e) => {
    props.setIsLoading(true);
    setTimeout(() => {
        props.setIsLoading(false);
        props.setShowChart(!props.showChart);
    }, 1000)
    
});

const showAboutText = curry((props, _e) => {
    props.setShowAbout(true);
});

const showTryItOut = curry((props, _e) => {
    if (props.showChart) {
        props.setShowChart(false);
    }
    props.setShowAbout(false);
})

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const MainLogic = compose(
    withState('chartData', 'setChartData', data),
    withState('isLoading', 'setIsLoading', false),
    withState('showChart', 'setShowChart', false),
    withState('showAbout', 'setShowAbout', false),
    withHandlers({
        toggleChart,
        showAboutText,
        showTryItOut
    })
)(Main);

export default MainLogic;