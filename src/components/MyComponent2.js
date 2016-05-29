import React, { Component } from 'react';
import { PropTypes, Text, View, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'
import MenuButton from './MenuButton'
import { connect } from 'react-redux';
import {toggleDrawer} from '../actions/drawerAction'

class MyComponent2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }
  
  static renderNavigationBar(props) {
    return (<MenuButton />);
  }
  
  showModal (visible) {
    this.setState({modalVisible: visible})
  }  
  render () {
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={() => this.showModal(false)}
          ><View><Text onPress={() => this.showModal(false)}>Heeeeeeeeeeeeej</Text></View></Modal>
        <Text style={{marginTop: 150}} onPress={() => this.showModal(true)} >
          The current scene
        </Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleDrawer}, dispatch)
}
function mapStateToProps ({drawer}) {
  return {drawer}
}


export default connect(mapStateToProps, mapDispatchToProps)(MyComponent2)

