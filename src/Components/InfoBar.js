import {StyleSheet, View, Text} from 'react-native';
const InfoBar = () => {
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Text
          style={{
            color: 'black',
            fontSize: 28,
            fontWeight: 'normal',
            marginLeft: 19,
          }}>
          Timetable
        </Text>

        <Text style={{color: '#3366ff', fontSize: 14, marginLeft: 113}}>
          View Holidays
        </Text>

        <View
          style={{
            height: 35,
            width: 35,
            borderRadius: 50,
            backgroundColor: '#f3e6ff',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1.5,
            borderColor: '#e6ccff',
            marginLeft: 10,
          }}>
          <Text style={{}}>AC</Text>
        </View>
      </View>
    </>
  );
};
export default InfoBar;
