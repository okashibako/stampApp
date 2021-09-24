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
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'2012-05-10'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2012-05-30'}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(day) => {console.log('selected day', day)}}
              // Handler which gets executed on day long press. Default = undefined
              onDayLongPress={(day) => {console.log('selected day', day)}}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={'yyyy MM'}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={(month) => {console.log('month changed', month)}}
              // Hide month navigation arrows. Default = false
              disableMonthChange={false}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
              firstDay={1}
              // Hide day names. Default = false
              hideDayNames={false}
              // Show week numbers to the left. Default = false
              showWeekNumbers={false}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              onPressArrowLeft={subtractMonth => subtractMonth()}
              // Handler which gets executed when press arrow icon right. It receive a callback can go next month
              onPressArrowRight={addMonth => addMonth()}
              // Disable left arrow. Default = false
              renderHeader={(date) => {/*Return JSX*/}}
              // Enable the option to swipe between months. Default = false
              enableSwipeMonths={true}
              theme={{
                calendarBackground: '#333248',
                textSectionTitleColor: 'white',
                textSectionTitleDisabledColor: 'gray',
                dayTextColor: 'red',
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