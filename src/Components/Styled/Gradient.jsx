import styled from 'styled-components/native';
import { GRADIENT_LEFT, GRADIENT_RIGHT } from '../../Style/Colors';

const Gradient = styled.View`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to right, ${GRADIENT_LEFT}, ${GRADIENT_RIGHT});
`;

export default Gradient;