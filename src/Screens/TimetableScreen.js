import {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';

import WeekSelector from '../Components/WeekSelector';
import WeekDays from '../Components/WeekDays';
import InfoBar from '../Components/InfoBar';
import CalendarPicker from 'react-native-calendar-picker';
import TimeTable from '../Components/TimeTable';

const TimetableScreen = () => {
  const days = {
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false,
    day6: false,
  };

  //For day to get selected/highlighted in the days indicator on clicking
  const [daySelected, setDaySelected] = useState(days);

  // Modal, Calendar opening and closing flag
  const [calendarOpened, setCalendarOpened] = useState(false);

  // Date being selected by the calendar component
  const [selectedStartDate, setSelectedStartDate] = useState({
    dateOb: moment().clone(),
    fromDate: moment().weekday(1).date(),
    fromMonth: moment(moment().weekday(1).month() + 1, 'MM').format('MMMM'),
    toDate: moment().weekday(7).date(),
    toMonth: moment(moment().weekday(7).month() + 1, 'MM').format('MMMM'),
  });

  // For blue dot below days indicator
  const [currentDay, setCurrentDay] = useState();

  // For the day to get selected/highlighted in the days indicator on the Scrollview being scrolled
  const [currentIndexScrollView, setCurrentIndexScrollView] = useState(0);

  const [showActivityIndicator, setShowActivityIndicator] = useState(false);

  const refScrollView = useRef(null);

  const moveTo = day => {
    switch (day) {
      case 1:
        refScrollView.current.scrollTo({x: 0});
        break;
      case 2:
        refScrollView.current.scrollTo({x: 320});
        break;
      case 3:
        refScrollView.current.scrollTo({x: 672});
        break;
      case 4:
        refScrollView.current.scrollTo({x: 1020});
        break;
      case 5:
        refScrollView.current.scrollTo({x: 1343});
        break;
    }
  };

  useEffect(() => {
    // let currentDayNum = moment().day();
    // let currentDay = '';
    // switch (currentDayNum) {
    //   case 1:
    //     currentDay = 'Mon';
    //     break;
    //   case 2:
    //     currentDay = 'Tue';
    //     break;
    //   case 3:
    //     currentDay = 'Wed';
    //     break;
    //   case 4:
    //     currentDay = 'Thu';
    //     break;
    //   case 5:
    //     currentDay = 'Fri';
    //     break;
    //   case 6:
    //     currentDay = 'Sat';
    //     break;
    // }

    // setCurrentDay(currentDay);

    const format = 'YYYY-MM-DD';
    let date = new Date();
    let dateTime = moment(date).format(format);
    const dayName = moment(dateTime).format('dddd');

    console.log('Saketh final name 2 - ', dayName);

    setCurrentDay(dayName.substring(0, 3));

    // console.log('Saketh moment test - ', moment().weekday(-6));
    // console.log('Saketh moment test 2 - ', moment().weekday(-6).day());
  }, []);

  // useEffect(() => {
  //   setSelectedStartDate({
  //     fromDate:
  //       currentDay === 'Sun'
  //         ? moment().weekday(-6).date()
  //         : moment().weekday(1).date(),
  //     fromMonth:
  //       currentDay === 'Sun'
  //         ? moment(moment().weekday(-6).month() + 1, 'MM').format('MMMM')
  //         : moment(moment().weekday(1).month() + 1, 'MM').format('MMMM'),
  //     toDate:
  //       currentDay === 'Sun'
  //         ? moment().weekday(0).date()
  //         : moment().weekday(7).date(),
  //     toMonth:
  //       currentDay === 'Sun'
  //         ? moment(moment().weekday(0).month() + 1, 'MM').format('MMMM')
  //         : moment(moment().weekday(7).month() + 1, 'MM').format('MMMM'),
  //   });
  // }, []);

  useEffect(() => {
    switch (currentIndexScrollView) {
      case 1:
        setDaySelected({...days, day1: true});
        break;
      case 2:
        setDaySelected({...days, day2: true});
        break;
      case 3:
        setDaySelected({...days, day3: true});
        break;
      case 4:
        setDaySelected({...days, day4: true});
        break;
      case 5:
        setDaySelected({...days, day5: true});
        break;
    }
  }, [currentIndexScrollView]);

  useEffect(() => {
    setShowActivityIndicator(true);
    setTimeout(() => {
      setShowActivityIndicator(false);
    }, 500);
  }, [selectedStartDate]);

  const onDateChange = date => {
    setSelectedStartDate({
      dateOb: date.clone(),
      fromDate: date.clone().weekday(1).date(),
      // fromMonth: date.weekday(1).month(),
      fromMonth: moment(date.clone().weekday(1).month() + 1, 'MM').format(
        'MMMM',
      ),
      toDate: date.weekday(7).date(),
      // toMonth: date.weekday(7).month(),
      toMonth: moment(date.clone().weekday(7).month() + 1, 'MM').format('MMMM'),
    });

    // setSelectedStartDate({
    //   fromDate:
    //     currentDay === 'Sun'
    //       ? moment().weekday(-6).date()
    //       : moment().weekday(1).date(),
    //   fromMonth:
    //     currentDay === 'Sun'
    //       ? moment(moment().weekday(-6).month() + 1, 'MM').format('MMMM')
    //       : moment(moment().weekday(1).month() + 1, 'MM').format('MMMM'),
    //   toDate:
    //     currentDay === 'Sun'
    //       ? moment().weekday(0).date()
    //       : moment().weekday(7).date(),
    //   toMonth:
    //     currentDay === 'Sun'
    //       ? moment(moment().weekday(0).month() + 1, 'MM').format('MMMM')
    //       : moment(moment().weekday(7).month() + 1, 'MM').format('MMMM'),
    // });
  };

  const ModalView = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={calendarOpened}
          onRequestClose={() => {
            setCalendarOpened(!calendarOpened);
          }}>
          <CalendarPicker
            onDateChange={date => {
              onDateChange(date);
              setCalendarOpened(!calendarOpened);
            }}
          />
        </Modal>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Information header */}
      <InfoBar />

      {/* Week Selector Component */}
      <WeekSelector
        calendarOpened={calendarOpened}
        setCalendarOpened={setCalendarOpened}
        selectedStartDate={selectedStartDate}
        setSelectedStartDate={setSelectedStartDate}
      />
      {showActivityIndicator ? (
        <>
          <View style={{marginTop: 200}}>
            <ActivityIndicator size="large" color="#3366ff" />
          </View>
        </>
      ) : (
        <>
          {/* Days of the Week */}
          <WeekDays
            setDaySelected={setDaySelected}
            days={days}
            daySelected={daySelected}
            currentDay={currentDay}
            moveTo={moveTo}
            selectedStartDate={selectedStartDate}
          />

          {/* Timetable */}
          <TimeTable
            currentIndexScrollView={currentIndexScrollView}
            setCurrentIndexScrollView={setCurrentIndexScrollView}
            refScrollView={refScrollView}
            moveTo={moveTo}
            daySelected={daySelected}
          />
        </>
      )}

      {calendarOpened ? <ModalView /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default TimetableScreen;
