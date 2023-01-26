import { PDFViewer } from '@react-pdf/renderer'
import MyDoc from './MyDoc'

const App = () => (
  <PDFViewer>
    <MyDoc />
  </PDFViewer>
)

export default App
