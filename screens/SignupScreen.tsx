import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
const SignupScreen: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const validateSignup = () => {
    if (!email.includes('@')) {
      setError('Invalid email format.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    setError('')
    // Handle signup
    console.log('Signup Successful')
    navigation.navigate('Login') // Redirect to Login screen
  }

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder='Enter email'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder='Enter password'
        secureTextEntry
      />
      <Text>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder='Confirm password'
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title='Signup' onPress={validateSignup} />
      <View style={{ marginVertical: 10 }} />
      <Button
        title='Go to Login'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
})

export default SignupScreen
