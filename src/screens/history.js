import React, { useState } from 'react';
import {View, ImageBackground, SafeAreaView, Text, Button} from 'react-native';
import historyStyle from '../../src/style/historyStyle';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function history() {
  const [count, setCount] = useState(0);

    return (
      <SafeAreaView style={historyStyle.safeArea}>
        <ImageBackground source={require('../../assets/carm_sea.jpg')} style={historyStyle.image}>
          <View style={historyStyle.contents}>
            <Calendar
              // Initially visible month. Default = Date()
              current={'2012-03-01'}
              minDate={'2012-05-10'}
              maxDate={'2012-05-30'}
              onDayPress={(day) => {console.log('selected day', day)}}
              onDayLongPress={(day) => {console.log('selected day', day)}}
              monthFormat={'yyyy年MM月'}
              // Handler which gets executed when press arrow icon right. It receive a callback can go next month
              onPressArrowRight={addMonth => addMonth()}
              theme={{
                calendarBackground: '#333248',
                textSectionTitleColor: 'white',
                textSectionTitleDisabledColor: 'gray',
                dayTextColor: 'blue',
                todayTextColor: 'white',
                selectedDayTextColor: 'white',
                monthTextColor: 'white',
                indicatorColor: 'white',
                selectedDayBackgroundColor: '#333248',
                arrowColor: 'white',
                // textDisabledColor: 'red',
                'stylesheet.calendar.header': {
                  week: {
                    marginTop: 30,
                    marginHorizontal: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }
                }
              }}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
}

export default history;