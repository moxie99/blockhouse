import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../store'
const LoginScreen: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const validateLogin = () => {
    if (!email.includes('@')) {
      setError('Invalid email format.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    setError('')
    dispatch(login(email)) // Dispatch login action
    console.log('Login Successful')
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
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title='Login' onPress={validateLogin} />
      <View style={{ marginVertical: 10 }} />
      <Button
        title='Go to Signup'
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
})

export default LoginScreen
