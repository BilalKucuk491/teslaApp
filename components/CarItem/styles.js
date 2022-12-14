import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '105%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  batterySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  batteryImage: {
    width: 70,
    height: 26,
    marginRight: 12,
  },
  batteryText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  status: {
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  controls: {
    flexDirection:"row",
    justifyContent:"center",
    marginTop:175
  },
  controlsButton:{
    borderWidth:2,
    borderColor:"white",
    borderRadius:50,
    padding:18,
    marginLeft:25
  }
});

export default styles;
