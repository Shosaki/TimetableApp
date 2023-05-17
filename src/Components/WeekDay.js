// import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WeekDay = ({day, date, isSelected, currentDay}) => {
  return (
    <>
      <View
        style={[
          styles.dayComp,
          {
            backgroundColor: isSelected ? '#3366ff' : '#e6e6e6',
          },
        ]}>
        <Text
          style={[styles.dayText, {color: isSelected ? 'white' : '#50504f'}]}>
          {/* Mon */}
          {day}
        </Text>

        <View
          style={[
            styles.dayNum,
            {
              backgroundColor: isSelected ? 'white' : '#e6e6e6',
            },
          ]}>
          <Text
            style={{
              color: isSelected ? '#3366ff' : 'black',
              fontWeight: 'bold',
            }}>
            {/* 01 */}
            {date}
          </Text>
        </View>
      </View>

      {currentDay === day ? (
        <View
          style={{
            height: 8,
            width: 8,
            alignSelf: 'center',
            marginTop: 5,
            borderRadius: 50,
            backgroundColor: '#3366ff',
          }}
        />
      ) : null}
    </>
  );
};
export default WeekDay;

const styles = StyleSheet.create({
  dayComp: {
    height: 85,
    width: 50,
    backgroundColor: 'lightgray',
    borderRadius: 25,
  },
  dayText: {
    marginTop: 14,
    alignSelf: 'center',
  },
  dayNum: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 11,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});
