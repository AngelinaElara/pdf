import { Document, Page, Text, View, StyleSheet, Font, Image} from '@react-pdf/renderer'

const TextComponents = ({
  title,
  text
}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', width: '280px'}}>
      <Text style={{fontSize: '12px'}}>{title}</Text>
      <View style={{fontSize: '10px'}}>
        <Text>·{text}</Text>
        <Text>·{text}</Text>
      </View>
    </View>
  )
} 

export default TextComponents