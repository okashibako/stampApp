import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View} from 'react-native';

  const OpningDatapicker = (props) => {
  return (
    <View>
       <DateTimePicker
        style={{width: 100}}
        testID="dateTimePicker"
        value={props.dated}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={props.change}
      />
    </View>
  );
};

export default OpningDatapicker;