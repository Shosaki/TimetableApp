import {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import WeekDay from './WeekDay';
const WeekDays = ({
  setDaySelected,
  days,
  daySelected,
  currentDay,
  moveTo,
  selectedStartDate,
}) => {
  useEffect(() => {
    setDaySelected({...days, day1: true});
  }, []);
  return (
    <>
      <View
        style={{
          flex: 0.09,
          flexDirection: 'row',
          marginHorizontal: 5,
          marginTop: 20,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => {
            setDaySelected({...days, day1: true});
            moveTo(1);
          }}>
          <WeekDay
            day={'Mon'}
            date={
              selectedStartDate.fromDate < 10
                ? `0${selectedStartDate.fromDate}`
                : `${selectedStartDate.fromDate}`
            }
            isSelected={daySelected.day1}
            currentDay={currentDay}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDaySelected({...days, day2: true});
            moveTo(2);
          }}>
          <WeekDay
            day={'Tue'}
            date={
              selectedStartDate.fromDate + 1 < 10
                ? `0${selectedStartDate.fromDate + 1}`
                : `${selectedStartDate.fromDate + 1}`
            }
            isSelected={daySelected.day2}
            currentDay={currentDay}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDaySelected({...days, day3: true});
            moveTo(3);
          }}>
          <WeekDay
            day={'Wed'}
            date={
              selectedStartDate.fromDate + 2 < 10
                ? `0${selectedStartDate.fromDate + 2}`
                : `${selectedStartDate.fromDate + 2}`
            }
            isSelected={daySelected.day3}
            currentDay={currentDay}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDaySelected({...days, day4: true});
            moveTo(4);
          }}>
          <WeekDay
            day={'Thu'}
            date={
              selectedStartDate.fromDate + 3 < 10
                ? `0${selectedStartDate.fromDate + 3}`
                : `${selectedStartDate.fromDate + 3}`
            }
            isSelected={daySelected.day4}
            currentDay={currentDay}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDaySelected({...days, day5: true});
            moveTo(5);
          }}>
          <WeekDay
            day={'Fri'}
            date={
              selectedStartDate.fromDate + 4 < 10
                ? `0${selectedStartDate.fromDate + 4}`
                : `${selectedStartDate.fromDate + 4}`
            }
            isSelected={daySelected.day5}
            currentDay={currentDay}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => setDaySelected({...days, day6: true})}>
          <WeekDay
            day={'Sat'}
            date={'06'}
            isSelected={daySelected.day6}
            currentDay={currentDay}
          />
        </TouchableOpacity> */}
      </View>
    </>
  );
};
export default WeekDays;
