import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import items from '../../items';
const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map(item=>(
        <TouchableOpacity key={item.id}>
        <View style={styles.menuRow}>
          <Icon name={item.icon} size={24} style={styles.icon} />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>{item.title}</Text>
            {item.subTitle && 
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            }
          </View>
          <Icon name="chevron-right" size={24} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;
