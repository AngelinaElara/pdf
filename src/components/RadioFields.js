import { Document, Page, Text, View, StyleSheet, Font, Image, Note} from '@react-pdf/renderer'
import circle from '../assets/circle.png'

const RadioFields = ({
  title,
  text
}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', marginLeft: '10px'}}>
      <View >
        <Image src={circle} style={{width: '10px', height: '10px', transform: 'translateY(12%)', marginRight: '2px'}}/>
      </View>
      <View style={{display: 'flex', flexDirection: 'column', marginTop: '10px'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: '8px'}}>{title}</Text>
          <Text style={{marginLeft: '10px', fontSize: '13px', fontWeight: 'bold'}}>{text}</Text>
        </View>
      <View style={{backgroundColor: '#000', height: '1px', width: '150px', marginTop: '3px'}}></View>
      </View>
    </View>
  )
}

export default RadioFields