import * as React from 'react';
import * as R from 'ramda';
import isMobile from '../util/isMobile';

import Button from './Styled/Button';
import ButtonTouchable from './Styled/ButtonTouchable';
import Container from './Styled/Container';
import Center from './Styled/Center';
import Chart from './Chart';
import Header from './Styled/Header';
import InputBackground from './Styled/InputBackground';
import InputField from './Styled/InputField';
import Gradient from './Styled/Gradient';
import { GridWhole } from './Styled/Grid';
import about from '../data/about';

// import {
//     BLACK,
//     BLUE,
//     WHITE,
//     GRAY
// } from '../Style/Colors';

import { View, Text, ActivityIndicator } from 'react-native';

export const preventSubmit =
    R.tap(e => e && e.preventDefault());

const Main = props => {
    console.log(props);
    const isActiveMobile = isMobile();
    return (
        <Container>
            <Gradient>
            <Header style={{ backgroundColor: 'transparent' }}>
                <View style={{ alignSelf: 'flex-start' }} />
            </Header>
            <Center style={{
                justifyContent: isActiveMobile ? 'flex-start' : 'center',
                backgroundColor: 'transparent',
                paddingTop: isActiveMobile ? 0 : 10
            }}>
                <View style={{ flex: 1, width: '100%', paddingTop: 0, alignContent: 'center' }}>
                    <Text style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 25,
                        color: 'white',
                        alignSelf: 'center'
                    }}>
                        Welcome to Tweemotion!
                    </Text>
                    <Text style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 20,
                        color: 'white',
                        alignSelf: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        marginTop: 5,
                        marginBottom: 30
                    }}>
                        Tweemotion is an AI Research project conducted by Nick Chouard and Ben Miner.
                    </Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <ButtonTouchable
                                isLoading={false}
                                onPress={props.showAboutText}
                                style={{
                                    backgroundColor: 'transparent',
                                    alignSelf: 'flex-start'
                                }}
                            >
                                <Text>
                                    About
                                </Text>
                            </ButtonTouchable>
                            <View style={{ width: 100 }} />
                            <ButtonTouchable
                                isLoading={false}
                                onPress={props.showTryItOut}
                                style={{
                                    backgroundColor: 'transparent',
                                    alignSelf: 'flex-start'
                                }}
                            >
                                <Text>
                                    Try it Out
                                </Text>
                            </ButtonTouchable>
                        </View>
                    { props.showAbout ?
                        <View style={{ backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text style={{
                                fontFamily: 'Ubuntu',
                                fontSize: 18,
                                color: 'white',
                                textAlign: 'center',
                                marginHorizontal: 300
                            }}>
                                {about}
                            </Text>
                        </View>
                    :
                        props.showChart ?
                            <Chart data={props.chartData} />
                            :
                            props.isLoading ?
                                <Center>
                                    <ActivityIndicator size={150} color='white' />
                                </Center>
                                :
                                <View>
                                    <InputBackground style={{ backgroundColor: 'transparent' }}>
                                        <GridWhole>
                                            <InputField
                                                placeholder={'Write some tex here...'}
                                                style={{ backgroundColor: 'transparent' }}
                                            />
                                        </GridWhole>
                                    </InputBackground>
                                    <Button
                                        isLoading={false}
                                        onPress={props.toggleChart}
                                        style={{ marginTop: 50 }}
                                    >
                                        <Text style={{
                                            fontFamily: 'Ubuntu',
                                            fontSize: isActiveMobile ? 16 : 20,
                                            top: 20,
                                            marginTop: 10,
                                            color: 'black'
                                        }}>
                                            Submit
                                        </Text>
                                    </Button>
                                </View>
                    }
                </View>
            </Center>
            </Gradient>
        </Container>
        )
    };
    
    export default Main;
    
    
