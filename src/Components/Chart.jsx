import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { View } from 'react-native-web';

const Chart = props => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
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