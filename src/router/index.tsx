import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import NavigationRoute from '../constants/navigationRoutes';
import store, { RootState } from '../redux/store';
import {RootStackParamList} from './RouterProps';
import {AuthNavigatorStack, DashboardMainStack} from './StackNavigator';

export const navigationRef =
  createNavigationContainerRef<StackNavigationProp<RootStackParamList>>();

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
export function reset() {
  if (navigationRef.isReady()) {
    navigationRef.reset({index: 0, routes: [{name: NavigationRoute.Login}]});
  }
}

type RouterProps = {
  isDarkMode?: boolean;
};

const Router: React.FC<RouterProps> = () => {
  const {isLogin} = useSelector((state: RootState) => state.user);
  return (
    <NavigationContainer ref={navigationRef}>
      {!isLogin ? <AuthNavigatorStack /> : <DashboardMainStack />}
    </NavigationContainer>
  );
};

export default Router;
