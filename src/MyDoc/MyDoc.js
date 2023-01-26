import { Document, Page, Text, View, StyleSheet, Font, Image} from '@react-pdf/renderer'
import logo from '../assets/logo.png'
import Fields from '../components/Fields'
import RadioFields from '../components/RadioFields'
import TextComponents from '../components/TextComponents'

Font.register({
  family: 'Ubuntu',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
    },
    {
      src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
      fontWeight: 'bold',
    },
    {
      src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ],
})

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Ubuntu',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  section: {
    flexGrow: 1
  },
  mainTitle: {
    margin: 10,
    fontSize: 25,
    textAlign: 'start',
    fontWeight: 'bold',
  },
  title: {
    margin: 10,
    fontSize: 16,
    textAlign: 'start',
    fontWeight: 'bold',
  }
})

// Create Document Component
const MyDoc = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* header */}
      <View style={{width: '100%', height: '10px', backgroundColor: '#ebca8e'}}></View>
      <View 
        style={{width: '100%', height: '50px', backgroundColor: '#000', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '10 20'}}
      >
        <Image
          style={{width: '100px'}}
          src={logo}
        />
        <Text style={{zIndex: '1', color: '#fff'}}>Contratto di Noleggio</Text>
      </View>
      {/* columns 1st row*/}
      <Text style={styles.mainTitle}>
        Condizioni di noleggio
      </Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.section}>
          <Fields title={'Marca e modello:'} text={'AUDI RS6'} lineWidth={270}/>
          <Fields title={'Colore:'} text={'NERO'} lineWidth={270}/>
          <Fields title={'Targa:'} text={'GJ666X'} lineWidth={270}/>
        </View>
        <View style={styles.section}>
          <Fields title={'Data e oro Ritiro:'} text={'111'} lineWidth={270}/>
          <Fields title={'Data e oro Risonsegna:'} text={'111'} lineWidth={270}/>
          <Fields title={'Luogo riconsegna'} text={'111'} lineWidth={270}/>
        </View>
      </View>
      {/* columns  2st row*/}
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.section}>
          <Text style={styles.title} fixed>
            Deposito Cauzionale
          </Text>
          <RadioFields title={'C. Credito |'} text={''}/>
          <RadioFields title={'Contanti |'} text={''}/>
          <RadioFields title={'Assegno |'} text={''}/>
          <RadioFields title={'Bonifico |'} text={''}/>
        </View>
        <View style={styles.section}>
          <Text style={styles.title} fixed>
            Canone Pattuito
          </Text>
          <RadioFields title={'C. Credito |'} text={''}/>
          <RadioFields title={'Contanti |'} text={''}/>
          <RadioFields title={'Assegno |'} text={''}/>
          <RadioFields title={'Bonifico |'} text={''}/>
        </View>
        <View style={styles.section}>
          <Text style={styles.title} fixed>
            Km totali inclusi
          </Text>
          <View style={{backgroundColor: '#000', height: '1px', width: '150px', marginTop: '21px'}}></View>
          <View style={{marginTop: '55px'}}>
            <Fields title={'Prezzo per ogni km extra:'} text={''} lineWidth={150}/>
          </View>
        </View>
      </View>
      {/* columns  3rd row*/}
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.section}>
          <Text style={styles.title} fixed>
            Carta di credito
          </Text>
          <Fields title={'Nome e Cognome:'} text={''} lineWidth={270}/>
          <Fields title={'Numero:'} text={''} lineWidth={270}/>
          <Fields title={'Scadenza:'} text={''} lineWidth={270}/>
          <Fields title={'Codice:'} text={''} lineWidth={270}/>
        </View>
        <View style={styles.section}>
          <Text style={styles.title} fixed>
            Franchigia e oneri
          </Text>
          <TextComponents 
            title={'Lorem ipsum dolor sit amet'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}
          />
        </View>
      </View>
    </Page>
  </Document>
)

export default MyDoc