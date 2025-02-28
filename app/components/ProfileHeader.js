import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import Plus (+) icon

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Profile Picture */}
        <Image
          source={{ uri: "https://via.placeholder.com/50" }} // Replace with actual image URL
          style={styles.profileImage}
        />
        {/* Greeting */}
        <View>
          <Text style={styles.greeting}>morning,</Text>
          <Text style={styles.name}>Martin Kenter</Text>
        </View>
      </View>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="plus" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: "#888",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default ProfileHeader;
