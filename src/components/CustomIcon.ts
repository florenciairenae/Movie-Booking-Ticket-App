import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
export default createIconSetFromIcoMoon(icoMoonConfig);

const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'LineAwesome',
  'line-awesome.ttf'
);