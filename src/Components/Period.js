import {StyleSheet, Text, View, Image} from 'react-native';

const Period = ({
  periodName,
  backgroundColor,
  borderColor,
  showVideoIcon,
  fromTime,
  toTime,
}) => {
  return (
    <View
      style={[
        styles.period,
        {
          backgroundColor:
            periodName === 'TIP' || periodName === 'MENTOR SESSION'
              ? 'white'
              : backgroundColor,
          borderColor:
            periodName === 'TIP' || periodName === 'MENTOR SESSION'
              ? '#e0ebeb'
              : borderColor,
          height:
            periodName === 'TIP' || periodName === 'MENTOR SESSION' ? 50 : 70,
        },
      ]}>
      <View style={styles.dataStyle}>
        {periodName === 'TIP' || periodName === 'MENTOR SESSION' ? (
          <View style={{marginLeft: 18}}>
            <Image
              source={
                periodName === 'TIP' || periodName === 'MENTOR SESSION'
                  ? require('../../assets/SmileyIcon.png')
                  : null
              }
              style={{
                width: 20,
                height: 20,
                tintColor: '#50504f',
              }}
            />
          </View>
        ) : null}

        <View style={[styles.periodName, {flex: 1, flexDirection: 'row'}]}>
          <Text
            style={[
              // styles.periodName,
              {
                color:
                  periodName === 'TIP' || periodName === 'MENTOR SESSION'
                    ? '#50504f'
                    : 'black',
                fontSize: 19,
                fontWeight: 'normal',
                color: 'black',
                marginLeft:
                  periodName === 'TIP' || periodName === 'MENTOR SESSION'
                    ? 4
                    : 20,
              },
            ]}>
            {periodName.length > 10
              ? `${periodName.substring(0, 5)}...`
              : periodName}
          </Text>

          {showVideoIcon ? (
            <View style={{marginLeft: 8, marginTop: 3}}>
              <Image
                source={require('../../assets/VideoIcon.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: '#50504f',
                }}
              />
            </View>
          ) : null}
        </View>

        <View
          style={{
            marginLeft:
              periodName === 'TIP' || periodName === 'MENTOR SESSION' ? 0 : 30,
          }}>
          <Image
            source={require('../../assets/ClockIcon.png')}
            style={{
              width: 20,
              height: 20,
              tintColor: '#50504f',
            }}
          />
        </View>

        <Text style={styles.periodTime}>{`${fromTime} - ${toTime}`}</Text>
      </View>
    </View>
  );
};
export default Period;

const styles = StyleSheet.create({
  period: {
    height: 70,
    width: 325,
    marginHorizontal: 13,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  dataStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  periodName: {
    flex: 0.4,
  },
  periodTime: {
    flex: 0.6,
    marginLeft: 5,
    // fontSize: 16,
    fontWeight: 'normal',
    color: '#50504f',
  },
});
