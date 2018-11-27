import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { View, Text } from 'react-native-web';

const Chart = props => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 22, textAlign: 'center', color: 'black' }}>
                {props.text}
            </Text>
            {/* <View style={{ height: 10 }} /> */}
            { props.showChart && <Doughnut
                data={props.data}
                width={props.isMobile ? 70 : 20}
                height={props.isMobile ? 70 : 20}
                options={{
                    maintainAspectRatio: false
                }}
            /> }
            { props.showTextResponse && 
                <Text style={{ fontFamily: 'Montserrat', fontSize: 22, textAlign: 'center', color: 'black' }}>
                    {props.textSentiment}
                </Text>
            }
        </View>
    )
};

export default Chart;