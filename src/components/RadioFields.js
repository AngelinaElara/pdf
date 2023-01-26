import { Document, Page, Text, View, StyleSheet, Font, Image, Note} from '@react-pdf/renderer'
import circle from '../assets/circle.png'

const RadioFields = ({
  title,
  text
}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px'}}>
      <Image src={circle} style={{width: '20px', height: '20px'}}/>
      <View style={{display: 'flex', flexDirection: 'column', margin: '10px 0 0 2px'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: '10px'}}>{title}</Text>
          <Text style={{marginLeft: '10px', fontSize: '13px', fontWeight: 'bold'}}>{text}</Text>
        </View>
      <View style={{backgroundColor: '#000', height: '1px', width: '150px', marginTop: '3px'}}></View>
      </View>
    </View>
  )
}

export default RadioFields