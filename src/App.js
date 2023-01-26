import { PDFViewer } from '@react-pdf/renderer'
import MyDoc from './MyDoc'

const App = () => (
  <PDFViewer style={{ position: 'absolute', border: 0, height: '100%', width: '100%' }}>
    <MyDoc />
  </PDFViewer>
)

export default App
