import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabsStack } from './TabsStack';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios' ? 4 : 8)
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderWidth: 0,
                    elevation: 0,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeSCreen"
                component={Navigator}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={22}
                            name='list-outline'
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={TabsStack}
                options={{
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={22}
                            name='search-outline'
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}