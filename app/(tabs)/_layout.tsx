import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
  headerStyle: {
    backgroundColor: '#12121A',
  },
  headerTintColor: '#F5C518',
  headerTitleStyle: {
    fontFamily: 'Bebas Neue',
    fontSize: 24,
  },
  tabBarStyle: {
    backgroundColor: '#12121A',
    borderTopColor: '#2A2A3A',
  },
  tabBarActiveTintColor: '#F5C518',
  tabBarInactiveTintColor: '#505060',
  tabBarLabelStyle: {
    fontFamily: 'Inter',
    fontSize: 12,
  },
}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}