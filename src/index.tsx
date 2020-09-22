import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View} from 'react-native';
import LandingPage from './page';

export default function App() {
  return (
    <>
      <LandingPage/>
      <StatusBar style="auto" />
      </>
  );
}


