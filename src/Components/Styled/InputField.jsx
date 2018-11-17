import * as R from 'ramda';
import * as React from 'react';

import styled from 'styled-components/native';

import {
    RED,
    // BLUE,
    BLACK,
    GRAY
} from '../../Style/Colors';

const InputField = props => (
    <Wrapper style={{
        ...props.style,
        borderColor: props.error ? RED : GRAY,
        backgroundColor:
            props.error ? RED : GRAY
    }}>
        <InputFieldStyle
            {...R.omit(['error'])(props)}
            style={{
                color: props.error ? RED : BLACK,
                padding: 5,
                shadowRadius: 10,
                shadowOffset: { height: 10 },
                shadowColor: BLACK,
                shadowOpacity: 0.7,
                borderRadius: 8
            }}
            placeholderTextColor={ props.error ? RED : 'white' }
            multiline={true}
        />
    </Wrapper>
);

const InputFieldStyle = styled.TextInput`
    font-size: 18;
    font-family: Ubuntu;
    flex: 1;
`;

const Wrapper = styled.View`
    padding-left: 18;
    padding-right: 18;
    border-width: 1;
    width: 100vw;
    height: 400;
    flex: 1;
    align-self: center; 
    justify-content: center;
    align-content: center;
    border-radius: 20;
`;

export default InputField;
