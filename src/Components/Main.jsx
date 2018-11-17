import * as React from 'react';
import * as R from 'ramda';
import isMobile from '../util/isMobile';

import Button from './Styled/Button';
import Container from './Styled/Container';
import Center from './Styled/Center';
import Header from './Styled/Header';
import InputBackground from './Styled/InputBackground';
import InputField from './Styled/InputField';
import { GridWhole } from './Styled/Grid';

import {
    BLACK,
    BLUE,
    WHITE,
    GRAY
} from '../Style/Colors';

import { View, Text } from 'react-native';

// var BarGraph = require('react-chartjs').Pie;

export const preventSubmit =
    R.tap(e => e && e.preventDefault());

const Main = props => {
    const isActiveMobile = isMobile();
    return (
        <Container>
            <Header style={{ backgroundColor: WHITE }}>
                <Center>
                    <Text style={{ fontSize: 25, color: BLACK, fontFamily: 'Ubuntu' }}>
                        Tweemotion
                    </Text>
                </Center>
            </Header>
            <Center style={{
                justifyContent: isActiveMobile ? 'flex-start' : 'center',
                backgroundColor: BLACK
            }}>
                <View style={{ flex: 1, width: '100%', paddingTop: 0, backgroundColor: BLACK, alignContent: 'center' }}>
                    <Text style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 25,
                        color: BLUE,
                        alignSelf: 'center'
                    }}>
                        Welcome to Tweemotion!
                    </Text>
                    <Text style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 20,
                        color: BLACK,
                        alignSelf: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        marginTop: 5,
                        marginBottom: 10
                    }}>
                        Tweemotion is an AI Research project conducted by Nick Chouard and Ben Miner.
                    </Text>
                    {/* <InputBackground style={{ backgroundColor: GRAY }}>
                        <GridWhole>
                            <InputField 
                                placeholder={'Write some text here...'}
                            />
                        </GridWhole>
                    </InputBackground> */}
                    {/* <BarGraph
                        data={chartData}
                        options={{
                            backgroundColor: 'white',
                            borderColor: BLUE,
                            borderWidth: 2,
                            hoverBackgroundColor: GRAY
                        }}
                        width='400'
                        height='400'
                    /> */}
                    {/* <View style={{ height: 75 }} /> */}
                    <Button
                        isLoading={false}
                        type='ANALYZE'
                        onPress={() => console.log('pressed!')}
                    >
                        <Text style={{
                            fontFamily: 'Ubuntu',
                            fontSize: 20,
                            color: 'white'
                        }}>
                            ANALYZE
                        </Text>
                    </Button>
                </View>
            </Center>
        </Container>
    )
};

export default Main;


