import React from "react";
import { SafeAreaView, Text } from "react-native";
import ProfileHeader from "./components/ProfileHeader"; // Ensure this path is correct

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ProfileHeader />
      <Text>Welcome to the Home Screen!</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
