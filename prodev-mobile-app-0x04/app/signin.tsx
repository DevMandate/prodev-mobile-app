import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGO } from "@/constants";

export default function Signin() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top navigation */}
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} onPress={() => router.back()} />
          <Image source={HEROLOGO} />
        </View>

        {/* Title */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in</Text>
          <Text style={styles.titleText}>to your Account</Text>
          <Text style={styles.subText}>
            Enter your email and password to sign in.
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formGroup}>
          {/* Email */}
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
          </View>

          {/* Password */}
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        {/* Primary Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Media Buttons */}
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Redirect */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/join")}>
            <Text style={styles.signupSubTitleText}> Join now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
