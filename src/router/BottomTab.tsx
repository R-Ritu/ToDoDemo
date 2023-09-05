import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../container/Dashboard';
import Actions from '../container/Actions';
import NavigationRoute from '../constants/navigationRoutes';
import HomeSvg from '../assets/Icons/home.svg';
import LocationSvg from '../assets/Icons/Location.svg';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NavigationRoute.Home}
        component={Dashboard}
        options={{
          tabBarActiveTintColor: Colors.bottomBarTint,
          headerShown: false,
          tabBarIcon: ({color}) => <HomeSvg fill={color} />,
        }}
      />
      <Tab.Screen
        name={NavigationRoute.Actions}
        component={Actions}
        options={{
          tabBarActiveTintColor: Colors.bottomBarTint,
          headerShown: false,
          tabBarIcon: ({color}) => <LocationSvg fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
