import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import FeeScreen from '../Screens/FeeScreen';
import AttendanceScreen from '../Screens/AttendanceScreen';
import TimetableScreen from '../Screens/TimetableScreen';
import ProfileScreen from '../Screens/ProfileScreen';

// IoIosListBox
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#3366ff',
        tabBarInactiveTintColor: '#50504f',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 75,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          marginBottom: 10,
        },
        tabBarIcon: ({focused, tintColor}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = require('../../assets/HomeIcon.png');
              break;
            case 'Fee':
              iconName = require('../../assets/RupeeIcon.png');
              break;
            case 'Attendance':
              iconName = require('../../assets/AttendanceIcon.png');
              break;
            case 'Timetable':
              iconName = require('../../assets/TimetableIcon.png');
              break;
            case 'Profile':
              iconName = require('../../assets/ProfileIcon.png');
              break;
          }

          return focused ? (
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#3366ff',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={iconName}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'white',
                }}
              />
            </View>
          ) : (
            <Image
              source={iconName}
              style={{
                width: 25,
                height: 25,
                tintColor: '#50504f',
              }}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fee" component={FeeScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Timetable" component={TimetableScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
