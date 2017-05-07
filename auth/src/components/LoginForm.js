import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
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
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}
export { LoginForm }
