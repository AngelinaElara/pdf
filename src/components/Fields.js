import {Text, View} from '@react-pdf/renderer'

const Fields = ({
  title,
  text,
  lineWidth
}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <View style={{display: 'flex', flexDirection: 'column', padding: '8px 10px 0 10px'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: '10px'}}>{title}</Text>
          <Text style={{marginLeft: '10px', fontSize: '13px', fontWeight: 'bold'}}>{text}</Text>
        </View>
        <View style={{backgroundColor: '#000', height: '1px', width: `${lineWidth}px`}}></View>
      </View>
    </View>
  )
} 

export default Fields