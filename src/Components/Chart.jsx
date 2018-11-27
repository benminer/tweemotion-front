import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { View, Text } from 'react-native-web';

const Chart = props => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 27, textAlign: 'center', color: 'white' }}>
                {props.text}
            </Text>
            <Doughnut
                data={props.data}
                width={10}
                height={10}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </View>
    )
};

export default Chart;