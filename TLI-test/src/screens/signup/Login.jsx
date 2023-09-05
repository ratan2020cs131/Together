import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import Logo from "../../../assets/Logo.png";
import { Ionicons } from "@expo/vector-icons";
import LoginData from "../../../credentials/LoginInfo.json";

const Login = ({ navigation }) => {
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
    setWrongPassword(false);
    setWrongEmail(false);
    setLoginSuccess(false);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  var logindata = null;
  const loginHandler = () => {
    let userExist = true;
    LoginData.forEach((item) => {
      if (item.email === user.email) {
        userExist = false;
        logindata = item;
        return;
      }
    })

    if (userExist) {
      setWrongEmail(true);
    } else {
      if (logindata && logindata.password === user.password) {
        // Alert.alert("Login Successful");
        setName(logindata.name);
        setLoginSuccess(true);
        setTimeout(() => { 
          setLoginSuccess(false);
          navigation.navigate("TabRoute", logindata) 
        }, 1000);
        console.log("logged in")
      } else {
        setWrongPassword(true);
      }

    }
  }

  return (
    <KeyboardAvoidingView style={styles.content} behavior="height" enabled>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[GlobalStyles.backgroundColor, styles.container]}>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Image source={Logo} style={[GlobalStyles.logo]}></Image>
            <View style={styles.form}>

              <TextInput
                placeholder="Email"
                placeholderTextColor="#E9E5D7"
                keyboardType="email-address"
                autoCapitalize="none"
                maxLength={40}
                onChangeText={(value) => handleInputChange("email", value)}
                style={[GlobalStyles.input, styles.formInput]}
              />
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#E9E5D7"
                  maxLength={20}
                  secureTextEntry={showPassword}
                  onChangeText={(value) => handleInputChange("password", value)}
                  style={[GlobalStyles.input, styles.formInput]}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={toggleShowPassword}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color="#E9E5D7"
                  />
                </TouchableOpacity>
              </View>
              {
                wrongPassword ?
                  <Text style={styles.wrongpass}>Wrong Password</Text> : null
              }
              {
                wrongEmail ?
                  <Text style={styles.wrongpass}>User not registered</Text> : null
              }
              {
                loginSuccess ?
                    <Text style={[GlobalStyles.boldText, styles.loginSuccess]}>Login Successful...</Text> : null
              }

            </View>
          </View>

          <TouchableOpacity
            style={[GlobalStyles.button, styles.button]}
            onPress={loginHandler}
          >
            <Text style={[GlobalStyles.boldText]}>LOGIN</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  form: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginVertical: 30,
    justifyContent: 'flex-start',
  },

  formInput: {
    width: "85%",
  },

  iconContainer: {
    borderLeftWidth: 1.5,
    borderLeftColor: "#E9E5D7",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },

  wrongpass: {
    color: "#F55E53",
  },

  button: {
    marginBottom: 70,
  },

  loginSuccess : {
    color:'#55B938'
  }

});

export default Login;
