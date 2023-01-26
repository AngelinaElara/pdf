import { Document, Page, Text, View, StyleSheet, Font, Image} from '@react-pdf/renderer'
import logo from '../assets/logo.png'
import Fields from '../components/Fields'
import RadioFields from '../components/RadioFields'
import TextComponents from '../components/TextComponents'
import OpenSans from '../fonts/OpenSans.ttf'

Font.register({
  family: 'OpenSans',
  src: OpenSans,
})

const styles = StyleSheet.create({
  page: {
    fontFamily: 'OpenSans',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  section: {
    flexGrow: 1,
  },
  mainTitle: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 18,
    textAlign: 'start',
    // fontWeight: 'bold',
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 10,
    textAlign: 'start',
    // fontWeight: 'bold',
  },
  block: {
    flexDirection: 'row'
  }
})

// Create Document Component
const MyDoc = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* header */}
      <View style={{width: '100%', height: '10px', backgroundColor: '#ebca8e'}}></View>
      <View 
        style={{width: '100%', height: '40px', backgroundColor: '#000', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '10px 30px'}}
      >
        <Image
          style={{width: '100px'}}
          src={logo}
        />
        <Text style={{zIndex: '1', color: '#fff'}}>Contratto di Noleggio</Text>
      </View>
      {/* container */}
      <View style={{margin: '0 20px 20px 20px'}}>
        {/* columns 1st row*/}
        <Text style={styles.mainTitle}>
          Condizioni di noleggio
        </Text>
        <View style={styles.block}>
          <View style={styles.section}>
            <Fields title={'Marca e modello:'} text={'AUDI RS6'} lineWidth={250}/>
            <Fields title={'Colore:'} text={'NERO'} lineWidth={250}/>
            <Fields title={'Targa:'} text={'GJ666X'} lineWidth={250}/>
          </View>
          <View style={styles.section}>
            <Fields title={'Data e oro Ritiro:'} text={'111'} lineWidth={250}/>
            <Fields title={'Data e oro Risonsegna:'} text={'111'} lineWidth={250}/>
            <Fields title={'Luogo riconsegna'} text={'111'} lineWidth={250}/>
          </View>
        </View>
        {/* columns  2st row*/}
        <View style={{display: 'flex', flexDirection: 'row'}}>
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
            <View style={{backgroundColor: '#000', height: '1px', width: '150px', marginTop: '24px'}}></View>
            <View style={{marginTop: '53px'}}>
              <Fields title={'Prezzo per ogni km extra:'} text={''} lineWidth={150}/>
            </View>
          </View>
        </View>
        {/* columns  3rd row*/}
        <View style={styles.block}>
          <View style={styles.section}>
            <Text style={styles.title} fixed>
              Carta di credito
            </Text>
            <Fields title={'Nome e Cognome:'} text={''} lineWidth={250}/>
            <Fields title={'Numero:'} text={''} lineWidth={250}/>
            <Fields title={'Scadenza:'} text={''} lineWidth={250}/>
            <Fields title={'Codice:'} text={''} lineWidth={250}/>
          </View>
          <View style={{display: 'flex', justifyContent: 'start'}}>
            <Text style={{textAlign: 'start', marginBottom: '3px', marginTop: '15px', fontSize: '12px',}} fixed>
              Franchigia e oneri
            </Text>
            <TextComponents 
              title={'Lorem ipsum dolor sit amet'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}
            />
          </View>
        </View>
        {/* columns  4rd row*/}
        <Text style={{marginLeft: '10px', fontSize: '14px', marginTop: '10px', textAlign: 'start'}}>
          Dati Cliente
        </Text>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.title} fixed>
            Dati generale
          </Text>
          <View style={styles.block}>
            <View style={styles.section}>
              <Fields title={'Nome e Cognome:'} text={''} lineWidth={250}/>
              <Fields title={'Cita e Prov.:'} text={''} lineWidth={250}/>
              <Fields title={'Tel.:'} text={''} lineWidth={250}/>
            </View>
            <View style={styles.section}>
              <Fields title={'Indirizzo:'} text={''} lineWidth={250}/>
              <Fields title={'CAP:'} text={''} lineWidth={250}/>
              <Fields title={'email:'} text={''} lineWidth={250}/>
            </View>
          </View>
        </View>
        {/* columns  5rd row*/}
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.title} fixed>
          Fatturazione
          </Text>
          <View style={styles.block}>
            <View style={styles.section}>
              <Fields title={'Indirizzo:'} text={''} lineWidth={250}/>
              <Fields title={'Cita e Prov.:'} text={''} lineWidth={250}/>
              <Fields title={'CAP:'} text={''} lineWidth={250}/>
            </View>
            <View style={styles.section}>
              <Fields title={'P.IVA:'} text={''} lineWidth={250}/>
              <Fields title={'Cod. Fisc:'} text={''} lineWidth={250}/>
              <Fields title={'Cod. Dest:'} text={''} lineWidth={250}/>
            </View>
          </View>
        </View>
        {/* columns  6rd row*/}
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.title} fixed>
            Dati patente 1
          </Text>
          <View style={styles.block}>
            <View style={styles.section}>
              <Fields title={'Nome e Cognome:'} text={''} lineWidth={250}/>
              <Fields title={'N patente:'} text={''} lineWidth={250}/>
              <Fields title={'Rilasciata da:'} text={''} lineWidth={250}/>
              <View style={styles.block}>
                <Fields title={'In data:'} text={''} lineWidth={115}/>
                <Fields title={'Scadenza:'} text={''} lineWidth={115}/>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={{fontSize: '6px', color: 'gray', marginTop: '-10px', marginLeft: '10px'}}>{'(Da compilare solo in caso di secondo canducente)'}</Text>
              <Fields title={'Nome e Cognome:'} text={''} lineWidth={250}/>
              <Fields title={'N patente:'} text={''} lineWidth={250}/>
              <Fields title={'Rilasciata da:'} text={''} lineWidth={250}/>
              <View style={styles.block}>
                <Fields title={'In data:'} text={''} lineWidth={115}/>
                <Fields title={'Scadenza:'} text={''} lineWidth={115}/>
              </View>
            </View>
          </View>
        </View>
        {/* line */}
        <View style={{display: 'flex', alignItems: 'start', marginLeft: '10px'}}>
          <View style={{backgroundColor: '#d2d2d2', height: '1px', width: '97%', marginTop: '25px'}}></View>
        </View>
        <View style={{flexDirection: 'row', marginTop: '10px'}}>
          <View style={styles.section}>
            <Fields title={'Firma Locatore:'} text={''} lineWidth={250}/>
          </View>
          <View style={styles.section}>
            <Fields title={'Firma Cliente:'} text={''} lineWidth={250}/>
          </View>
        </View>
      </View>
      <Text style={{marginTop: '15px', color: '#a4a4a4', textAlign: 'center', fontSize: '8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
    </Page>
  </Document>
)

export default MyDoc