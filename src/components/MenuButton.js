import React from 'react'
import { Text, View, Dimensions, Animated } from 'react-native';
import { connect } from 'react-redux';
import {toggleDrawer} from '../actions/drawerAction'
import { bindActionCreators } from 'redux'
class MenuButton extends React.Component {

  render () {
    console.log(this.props);
    return <View style={{position: 'absolute', bottom: 0}}>
      <Text style={{fontSize: 34}} onPress={() => {this.props.toggleDrawer(); }}>NavBar {Dimensions.get('window').width * 0.25} {this.props.drawer ? 'True' : 'False' }</Text>
    </View>
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleDrawer}, dispatch)
}
function mapStateToProps ({drawer}) {
  return {drawer}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton)