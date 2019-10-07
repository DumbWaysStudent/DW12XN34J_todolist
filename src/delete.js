import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, List } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';


class Delete extends Component {

  constructor(props) {
    super(props)

    this.state = {
      datas: [
        {id:1, name:'Work'},
        {id:2, name:'swim'},
        {id:3, name:'play'},
        {id:4, name:'sleep'},
        {id:5, name:'run'},
      ],
      data: '',
    }
  }
  onList = () => {
      return this.state.datas.map((item) => {
        return (
            <View style={styles.direcL}>
                <Text style={styles.textList}>
                {item.name}
                </Text>

                {/* <TouchableOpacity onPress={this.onHandleEdit}>
                  <Icon name='edit' style={styles.btnAdd} />
                </TouchableOpacity> */}

                <TouchableOpacity onPress={() => this.onHandleDelete(item.id)}>
                  <Icon name='trash' style={styles.btnDel} />
                </TouchableOpacity>  
            </View>
        );
      })
  }
  onHandleAdd = (text) => {
    this.setState({data: text})
  }
  onHandleBtn = () =>{
    if(this.state.data !== ''){
      let tambah = this.state.datas.length,
    newInput = [{
      id: tambah + 1,
      name: this.state.data
    }]

    this.setState({datas: [...this.state.datas, ...newInput]});
    this.setState({data: ''})
    }else{
      alert('Field Tidak Boleh Kosong')
    }
    
  }

  onHandleDelete = (id) =>{
    this.setState({
        datas : this.state.datas.filter(datas => datas.id !== id)
    })
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
            
            {this.onList()}
            
      </View>
          
      
    )
  }

}

const styles = StyleSheet.create({
  textList: {
    fontSize: 28,
    flex: 8,
    paddingBottom:30,
  },
  inputTxt:{
    width:'80%',
    borderColor:'black',
    height:50,
    borderWidth:2,
    fontSize:18,
    marginTop:10,
    marginRight:10,
  },
  btn:{
    borderRadius:2,
    backgroundColor:'blue',
    width:70,
    height:50,
    marginTop:10
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
  direcL:{
      flexDirection:'row',
      borderBottomWidth:2,
  },
  btnDel:{
      fontSize:30,
      padding:10,
      color:'red',
      marginTop:20,
      
  },
  // btnAdd:{
  //   fontSize:30,
  //   marginTop:20,
  //   padding:10,
  //   color:'green',
  // },
  txtEdDl:{
      textAlign:'center',
      paddingTop:7,
  }
})

export default Delete;