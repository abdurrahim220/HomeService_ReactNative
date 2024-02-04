import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/extra/login.png")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 25, color: Colors.WHITE, textAlign: "center" }}
        >
          Let's find{" "}
          <Text style={{ fontWeight: "bold" }}>
            Professional Cleaning and Repair
          </Text>{" "}
          Services
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Best App to find services near you which delivery you a professional
          services.
        </Text>
        <Pressable onPress={onPress} style={styles.button}>
          <Text style={{ textAlign: "center", fontSize: 17,color:Colors.PRIMARY }}>
            Let's Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: "50%",
    marginTop: 30,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "60%",
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "50%",
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 20,
  },
});
