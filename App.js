import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'

class Add extends Component {

  constructor(props) {
    super(props)

    this.state = {
      datas: [
        'work',
        'swim',
        'study',
        'sleep',
        'run',
      ],
      data: '',
    }
  }

  onHandleAdd = (text) => {
    this.setState({data: text})
  }

  onHandleBtn = () =>{
    if(this.state.data !== ''){
      let tambah = this.state.datas.concat(this.state.data)
      this.setState({datas: tambah})
      this.setState({data: ''})
    }else{
      alert('Field Tidak boleh kosong!')
    }
  }

  render() {

    return (

      <View>
        
        <View style={styles.direc}>
              
          <TextInput style={styles.inputTxt}
            placeholder='New todo'
            type='text'
            onChangeText={(text) => this.onHandleAdd(text)} value={this.state.data}
          />

          <TouchableOpacity style={styles.btn}>
              <Text
              style={styles.txtB}
              onPress={this.onHandleBtn}
              >Add</Text>
          </TouchableOpacity>
          
        </View>

            {this.state.datas.map((item) => 
            <Text style={styles.textList}>{item}</Text>)
            }

      </View> 
    )
  }

}

const styles = StyleSheet.create({
  textList: {
    fontSize: 28,
    borderBottomWidth: 2,
  },
  inputTxt:{
    width:'80%',
    borderColor:'red',
    height:50,
    borderWidth:2,
    fontSize:18,

  },
  btn:{
    borderRadius:2,
    backgroundColor:'blue',
    width:70,
    height:50,
  },
  txtB:{
    textAlign:'center',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:24,
    paddingTop:7,
    },
  direc:{
    flexDirection:'row',
    justifyContent:'center',
    paddingBottom:50,
    alignItems:'center',
    
  },
})

export default Add;