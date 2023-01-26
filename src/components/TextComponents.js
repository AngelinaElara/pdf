import { Document, Page, Text, View, StyleSheet, Font, Image} from '@react-pdf/renderer'

const TextComponents = ({
  title,
  text
}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', width: '280px'}}>
      <Text style={{fontSize: '8px', textAlign: 'start', marginTop: '5px'}}>{title}</Text>
      <View style={{fontSize: '6px', marginTop: '2px'}}>
        <Text>·{text}</Text>
        <Text>·{text}</Text>
      </View>
    </View>
  )
} 

export default TextComponents