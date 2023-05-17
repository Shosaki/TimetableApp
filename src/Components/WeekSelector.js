import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import moment from 'moment';

const WeekSelector = ({
  calendarOpened,
  setCalendarOpened,
  selectedStartDate,
  setSelectedStartDate,
}) => {
  const prevWeek = () => {
    let currentDateClone = selectedStartDate.dateOb.clone();
    let updatedDate = currentDateClone.subtract(7, 'days');
    console.log('saketh prev - ', selectedStartDate.dateOb, updatedDate);
    setSelectedStartDate({
      dateOb: updatedDate.clone(),
      fromDate: updatedDate.clone().weekday(1).date(),
      // fromMonth: date.weekday(1).month(),
      fromMonth: moment(
        updatedDate.clone().weekday(1).month() + 1,
        'MM',
      ).format('MMMM'),
      toDate: updatedDate.clone().weekday(7).date(),
      // toMonth: date.weekday(7).month(),
      toMonth: moment(updatedDate.clone().weekday(7).month() + 1, 'MM').format(
        'MMMM',
      ),
    });
  };

  const nextWeek = () => {
    // console.log('Next Week - ', selectedStartDate.dateOb.add(7, 'days'));
    let currentDateClone = selectedStartDate.dateOb.clone();
    let updatedDate = currentDateClone.add(7, 'days');
    console.log('saketh next - ', selectedStartDate.dateOb, updatedDate);
    setSelectedStartDate({
      dateOb: updatedDate.clone(),
      fromDate: updatedDate.clone().weekday(1).date(),
      // fromMonth: date.weekday(1).month(),
      fromMonth: moment(
        updatedDate.clone().weekday(1).month() + 1,
        'MM',
      ).format('MMMM'),
      toDate: updatedDate.clone().weekday(7).date(),
      // toMonth: date.weekday(7).month(),
      toMonth: moment(updatedDate.clone().weekday(7).month() + 1, 'MM').format(
        'MMMM',
      ),
    });
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            {borderBottomLeftRadius: 10, borderTopLeftRadius: 10},
          ]}
          onPress={() => prevWeek()}>
          <Image
            source={require('../../assets/PreviousIcon.png')}
            style={{
              width: 15,
              height: 15,
              tintColor: 'black',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCalendarOpened(!calendarOpened)}
          style={styles.week}>
          <View>
            <Text
              style={{color: '#50504f', fontWeight: 'normal', fontSize: 18}}>
              {/* 1st Oct - 6th Oct */}
              {`${selectedStartDate.fromDate}${
                [1, 21, 31].includes(selectedStartDate.fromDate)
                  ? 'st'
                  : [2, 22].includes(selectedStartDate.fromDate)
                  ? 'nd'
                  : [3, 23].includes(selectedStartDate.fromDate)
                  ? 'rd'
                  : 'th'
              } ${selectedStartDate.fromMonth} - ${selectedStartDate.toDate}${
                [1, 21, 31].includes(selectedStartDate.toDate)
                  ? 'st'
                  : [2, 22].includes(selectedStartDate.toDate)
                  ? 'nd'
                  : [3, 23].includes(selectedStartDate.toDate)
                  ? 'rd'
                  : 'th'
              } ${selectedStartDate.toMonth}`}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {borderBottomRightRadius: 10, borderTopRightRadius: 10},
          ]}
          onPress={() => nextWeek()}>
          <Image
            source={require('../../assets/NextIcon.png')}
            style={{
              width: 15,
              height: 15,
              tintColor: 'black',
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WeekSelector;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    flex: 0.135,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  week: {
    flex: 0.745,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
});
