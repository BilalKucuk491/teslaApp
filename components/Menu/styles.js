import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  menuItems: {
    marginTop:20,
    marginLeft:20,
    marginRight:20
  },
  icon: {
    color: 'white',
  },
  menuRow: {
    marginTop:20,
    flexDirection:"row",
    alignItems:"center",
  },
  menuTextBox: {
    flexGrow:1,
  },
  menuText: {
    color: 'white',
    fontSize:16,
    fontWeight:"bold",
    marginLeft:15,
    textTransform:'uppercase'
  },
  arrowIcon:{
    color:"#4d4d4e"
  },
  subTitle:{
    color:"grey",
    fontSize:14,
    marginLeft:15,
  }
});

export default styles;
