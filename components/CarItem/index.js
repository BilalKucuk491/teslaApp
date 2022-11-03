import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from '../Menu';
// import items from '../../items';

const CarItem = () => {
  const [locked, setLocked] = useState(true);
  const lockHandler = ()=>{
    locked ? setLocked(false) : setLocked(true);
  }  
  return (
    <View style={styles.container}>
      {/* header */}
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="cog" style={styles.icon} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NazMobile</Text>
        <TouchableOpacity>
          <Icon name="toolbox" style={styles.icon} size={24} />
        </TouchableOpacity>
      </View>
      {/* milage */}
      <View style={styles.batterySection}>
        <Image
          source={require('../../assets/battery.png')}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi </Text>
      </View>

      {/* status */}

      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      {/* controls icons */}
      <ScrollView>
      <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.controlsButton}>
            <Icon name="fan" style={styles.icon} size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlsButton}>
            <Icon name="key" style={styles.icon} size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={lockHandler}>
          <View style={styles.controlsButton}>
            <Icon
              name={locked ? 'lock' : 'unlock-alt'}
              style={styles.icon}
              size={24}
            />
          </View>
        </TouchableOpacity>
      </View>

      
      {/* menu */}
      <Menu/>
     
      </ScrollView>
    </View>
  );
};

export default CarItem;
