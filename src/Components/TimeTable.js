import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import Period from '../Components/Period';

const TimeTable = ({
  currentIndexScrollView,
  setCurrentIndexScrollView,
  refScrollView,
  moveTo,
  daySelected,
}) => {
  const DATA1 = [
    {
      id: '1',
      title: 'Hindi2',
      backgroundColor: '#f3e6ff',
      borderColor: '#e6ccff',
      showVideoIcon: true,
      fromTime: '09:50',
      toTime: '10:25',
    },
    {
      id: '2',
      title: 'Telugu2',
      backgroundColor: '#e6f3ff',
      borderColor: '#cce6ff',
      showVideoIcon: true,
      fromTime: '09:50',
      toTime: '10:25',
    },
    {
      id: '3',
      title: 'EVS',
      backgroundColor: '#e6ffe6',
      borderColor: '#ccffcc',
      fromTime: '10:40',
      toTime: '11:15',
    },
    {
      id: '4',
      title: 'ENG',
      backgroundColor: '#ccffb3',
      borderColor: '#bbff99',
      fromTime: '11:30',
      toTime: '12:05',
    },
    {
      id: '5',
      title: 'TIP',
      backgroundColor: '#ffe6e6',
      borderColor: '#ffcccc',
      fromTime: '12:05',
      toTime: '12:15',
    },
    {
      id: '6',
      title: 'DANCE',
      backgroundColor: '#fff7e6',
      borderColor: '#ffe7b3',
      fromTime: '03:00',
      toTime: '03:30',
    },
    {
      id: '7',
      title: 'Extra',
      backgroundColor: 'blue',
      borderColor: '#e6ccff',
      fromTime: '03:30',
      toTime: '04:05',
    },
  ];

  const DATA2 = [
    {
      id: '1',
      title: 'MATH',
      backgroundColor: '#f3e6ff',
      borderColor: '#e6ccff',
      showVideoIcon: true,
      fromTime: '09:50',
      toTime: '10:25',
    },
    {
      id: '2',
      title: 'EVS',
      backgroundColor: '#e6f3ff',
      borderColor: '#cce6ff',
      showVideoIcon: true,
      fromTime: '11:30',
      toTime: '12:05',
    },
    {
      id: '3',
      title: 'TIP',
      backgroundColor: '#e6ffe6',
      borderColor: '#ccffcc',
      fromTime: '12:05',
      toTime: '12:15',
    },
    {
      id: '4',
      title: 'A&C',
      backgroundColor: '#e6ffe6',
      borderColor: '#ccffcc',
      showVideoIcon: true,
      fromTime: '03:00',
      toTime: '03:30',
    },
    {
      id: '5',
      title: 'Telugu2',
      backgroundColor: '#ccffb3',
      borderColor: '#bbff99',
      fromTime: '10:40',
      toTime: '11:15',
    },
    {
      id: '6',
      title: 'Hindi2',
      backgroundColor: '#fff7e6',
      borderColor: '#ffe7b3',
      fromTime: '10:40',
      toTime: '11:15',
    },
    {
      id: '7',
      title: 'Extra',
      backgroundColor: 'blue',
      borderColor: '#e6ccff',
      fromTime: '11:15',
      toTime: '12:00',
    },
  ];

  const DATA3 = [
    {
      id: '1',
      title: 'MATH',
      backgroundColor: '#f3e6ff',
      borderColor: '#e6ccff',
      fromTime: '09:50',
      toTime: '10:25',
    },
    {
      id: '2',
      title: 'EVS',
      backgroundColor: '#e6f3ff',
      borderColor: '#cce6ff',
      fromTime: '10:40',
      toTime: '11:15',
    },
    {
      id: '3',
      title: 'ENG',
      backgroundColor: '#e6ffe6',
      borderColor: '#ccffcc',
      fromTime: '11:30',
      toTime: '12:05',
    },
    {
      id: '4',
      title: 'TIP',
      backgroundColor: 'aqua',
      borderColor: '#e6ccff',
      fromTime: '12:05',
      toTime: '12:15',
    },
    {
      id: '5',
      title: 'PE',
      backgroundColor: '#ccffb3',
      borderColor: '#bbff99',
      fromTime: '03:00',
      toTime: '03:30',
    },
  ];

  const DATA4 = [
    {
      id: '1',
      title: 'Hindi2',
      backgroundColor: '#f3e6ff',
      borderColor: '#e6ccff',
      fromTime: '09:50',
      toTime: '10:25',
    },
    {
      id: '2',
      title: 'Telugu2',
      backgroundColor: '#e6f3ff',
      borderColor: '#cce6ff',
      fromTime: '09:50',
      toTime: '10:25',
    },
    {
      id: '3',
      title: 'MATH',
      backgroundColor: '#e6ffe6',
      borderColor: '#ccffcc',
      fromTime: '10:40',
      toTime: '11:15',
    },
    {
      id: '4',
      title: 'ENG',
      backgroundColor: '#ccffb3',
      borderColor: '#bbff99',
      fromTime: '11:30',
      toTime: '12:05',
    },
    {
      id: '5',
      title: 'TIP',
      backgroundColor: '#ffe6e6',
      borderColor: '#ffcccc',
      fromTime: '12:05',
      toTime: '12:15',
    },
    {
      id: '6',
      title: 'MUSIC',
      backgroundColor: '#fff7e6',
      borderColor: '#ffe7b3',
      fromTime: '03:00',
      toTime: '03:30',
    },
    {
      id: '7',
      title: 'Extra',
      backgroundColor: 'blue',
      borderColor: '#e6ccff',
      fromTime: '03:30',
      toTime: '04:00',
    },
  ];

  const DATA5 = [
    {
      id: '1',
      title: 'Telugu2',
      backgroundColor: '#f3e6ff',
      borderColor: '#e6ccff',
      showVideoIcon: true,
      fromTime: '09:50',
      toTime: '10:25',
    },
    {
      id: '2',
      title: 'Hindi2',
      backgroundColor: '#e6f3ff',
      borderColor: '#cce6ff',
      showVideoIcon: true,
      fromTime: '09:50',
      toTime: '10:25',
    },
    {
      id: '3',
      title: 'MATH',
      backgroundColor: '#e6ffe6',
      borderColor: '#ccffcc',
      showVideoIcon: true,
      fromTime: '10:40',
      toTime: '11:15',
    },
    {
      id: '4',
      title: 'ENG',
      backgroundColor: '#ccffb3',
      borderColor: '#bbff99',
      showVideoIcon: true,
      fromTime: '11:30',
      toTime: '12:05',
    },
    {
      id: '5',
      title: 'TIP',
      backgroundColor: '#ffe6e6',
      borderColor: '#ffcccc',
      fromTime: '12:05',
      toTime: '12:15',
    },
    {
      id: '6',
      title: 'MENTOR SESSION',
      backgroundColor: '#fff7e6',
      borderColor: '#ffe7b3',
      fromTime: '03:00',
      toTime: '03:30',
    },
    {
      id: '7',
      title: 'Extra',
      backgroundColor: 'blue',
      borderColor: '#e6ccff',
      fromTime: '03:30',
      toTime: '04:00',
    },
  ];

  const customSnapInterval = () => {
    let snapIntervalPosition = 0;

    if (daySelected.day1) snapIntervalPosition = 320;
    else if (daySelected.day2) snapIntervalPosition = 336;
    else if (daySelected.day3) snapIntervalPosition = 341;
    else if (daySelected.day4) snapIntervalPosition = 336;
    else if (daySelected.day5) snapIntervalPosition = 336;
    else snapIntervalPosition = 336;

    return snapIntervalPosition;
  };

  const handleOnScroll = event => {
    let scrollPosition = Number(
      event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
    );

    // console.log('Saketh offset 1 - ', event.nativeEvent.contentOffset.x);
    // console.log('Saketh offset 2 - ', scrollPosition);

    if (scrollPosition < 0.5) scrollPosition = 1;
    else if (scrollPosition < 1) scrollPosition = 2;
    else if (scrollPosition < 2) scrollPosition = 3;
    else if (scrollPosition < 3) scrollPosition = 4;
    else if (scrollPosition < 3.5) scrollPosition = 5;

    setCurrentIndexScrollView(scrollPosition);
  };

  return (
    <>
      <View style={styles.timeTableContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          // pagingEnabled
          snapToInterval={customSnapInterval()}
          // scrollEventThrottle={16}
          // snapToAlignment="initial"
          overScrollMode="never"
          onScroll={e => handleOnScroll(e)}
          decelerationRate={'fast'}
          ref={refScrollView}>
          <FlatList
            data={DATA1}
            renderItem={({item}) => (
              <Period
                periodName={item.title}
                backgroundColor={item.backgroundColor}
                borderColor={item.borderColor}
                showVideoIcon={item.showVideoIcon ? item.showVideoIcon : null}
                fromTime={item.fromTime}
                toTime={item.toTime}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />

          <FlatList
            data={DATA2}
            renderItem={({item}) => (
              <Period
                periodName={item.title}
                backgroundColor={item.backgroundColor}
                borderColor={item.borderColor}
                showVideoIcon={item.showVideoIcon ? item.showVideoIcon : null}
                fromTime={item.fromTime}
                toTime={item.toTime}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />

          <FlatList
            data={DATA3}
            renderItem={({item}) => (
              <Period
                periodName={item.title}
                backgroundColor={item.backgroundColor}
                borderColor={item.borderColor}
                showVideoIcon={item.showVideoIcon ? item.showVideoIcon : null}
                fromTime={item.fromTime}
                toTime={item.toTime}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />

          <FlatList
            data={DATA4}
            renderItem={({item}) => (
              <Period
                periodName={item.title}
                backgroundColor={item.backgroundColor}
                borderColor={item.borderColor}
                showVideoIcon={item.showVideoIcon ? item.showVideoIcon : null}
                fromTime={item.fromTime}
                toTime={item.toTime}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />

          <FlatList
            data={DATA5}
            renderItem={({item}) => (
              <Period
                periodName={item.title}
                backgroundColor={item.backgroundColor}
                borderColor={item.borderColor}
                showVideoIcon={item.showVideoIcon ? item.showVideoIcon : null}
                fromTime={item.fromTime}
                toTime={item.toTime}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </>
  );
};
export default TimeTable;

const styles = StyleSheet.create({
  timeTableContainer: {
    flex: 1,
    marginTop: 60,
  },
});
