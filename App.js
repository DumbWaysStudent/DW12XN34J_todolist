import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container } from 'native-base';

class ListDo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [
        'work',
        'swim',
        'study',
        'sleep',
        'run',
      ]
    }
  }


  render() {

    return (
      <Container>
        <View>

          {this.state.data.map((item) => <Text style={styles.textList}>{item}</Text>)}

        </View>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  textList: {
    fontSize: 28,
    borderBottomWidth: 2,
  }
})

export default ListDo;