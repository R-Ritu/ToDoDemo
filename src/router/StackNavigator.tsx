import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import NavigationRoute from '../constants/navigationRoutes';
import ForgotPassword from '../container/Auth/ForgotPassword';
import Login from '../container/Auth/Login';
import BottomTab from './BottomTab';
import {RootStackParamList} from './RouterProps';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../container/Dashboard';
import Drawer from './Drawer';

export const Stack = createNativeStackNavigator();

export const AuthNavigatorStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationRoute.Login}>
      <Stack.Group
        key="auth"
        screenOptions={{
          contentStyle: {backgroundColor: 'white'},
          // header: props => <RNHeader hideFav {...props} />,
          headerStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen
          name={NavigationRoute.Login}
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name={NavigationRoute.ForgotPassword}
          options={{headerShown: false}}
          component={ForgotPassword}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const DrawerNavigator = createDrawerNavigator();

export const DashboardMainStack: React.FC = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  return (
    <DrawerNavigator.Navigator initialRouteName = {NavigationRoute.BottomTabStack} 
    drawerContent={(props) =><Drawer {...props}/>} >
      <DrawerNavigator.Group
        screenOptions={{
          headerShown: false,
        }}>
        <DrawerNavigator.Screen
          name={NavigationRoute.BottomTabStack}
          component={DashboardStackNavigator}
          options={{
            headerShown: false,
          }}
        />
      </DrawerNavigator.Group>
    </DrawerNavigator.Navigator>
  );
};


export const DashboardStackNavigator: React.FC = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={NavigationRoute.BottomTabStack}
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name={NavigationRoute.Dashboard}
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
