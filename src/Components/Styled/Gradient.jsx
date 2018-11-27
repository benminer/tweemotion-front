import styled from 'styled-components';
// import { GRADIENT_LEFT, GRADIENT_RIGHT } from '../../Style/Colors';

const Gradient = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    background: linear-gradient(270deg, #9d7b7d, #1bd5df);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 20s ease infinite;
    -moz-animation: AnimationName 20s ease infinite;
    animation: AnimationName 20s ease infinite;

    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName { 
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
`;

export default Gradient;