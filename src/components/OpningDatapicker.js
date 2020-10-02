import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View} from 'react-native';

  const OpningDatapicker = (props) => {
  return (
    <View>
       <DateTimePicker
        style={{width: 200}}
        testID="dateTimePicker"
        value={props.dated}
        mode={"date"}
        is24Hour={true}
        display="default"
        onChange={(date) => props.change}
      />
    </View>
  );
};

export default OpningDatapicker;