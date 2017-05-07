import React, { Component } from 'react';
import Firebase from '../Firebase'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress(){
    const { email, password } = this.state;
    this.setState({ error: '', loading: true })
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(()=>{
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((err)=>{
          this.setState({ error: String(err), loading: false })
        })
      })
      .then(()=>{
        this.setState({loading: false})
      })

  }

  renderButton(){
    if (this.state.loading) {
      return <Spinner size='small' />
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            placeholder='Khazix@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry={true}
          placeholder='pas55w0rd!'
          label='password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
export { LoginForm }
