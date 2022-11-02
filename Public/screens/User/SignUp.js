import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [repassword, setRepassword] = useState("");

  const handleSubmit = async () => {
    if (name === "" || email === "" || password === "") {
      alert("All fields are required");
      return;
    }
    await axios.post("http://localhost:8001/api/signup", {
      name,
      email,
      password,
    });
    alert("Registration Successful");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{ marginVertical: 100 }}>
        {/* <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/srilanka.png")}
            style={styles.imageStyles}
          />
        </View> */}
        <Text style={styles.signupText}>Register</Text>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>NAME</Text>
          <TextInput
            style={styles.signupInput}
            value={name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>EMAIL</Text>
          <TextInput
            style={styles.signupInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>PASSWORD</Text>
          <TextInput
            style={styles.signupInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>
        {/* <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>
            CONFIRM PASSWORD
          </Text>
          <TextInput
            style={styles.signupInput}
            value={repassword}
            onChangeText={(text) => setRepassword(text)}
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View> */}
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 12, textAlign: "center" }}>
          Already Registered?{""}
          <Text
            style={{ color: "darkred", fontWeight: "bold" }}
            onPress={() => navigation.navigate("SignIn")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  signupText: {
    fontSize: 30,
    textAlign: "center",
  },
  signupInput: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  },
  buttonStyle: {
    backgroundColor: "darkmagenta",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    marginHorizontal: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  // imageContainer: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // imageStyles: {
  //   width: 100,
  //   height: 100,
  //   marginVertical: 20,
  // },
});

export default SignUp;
