import './App.css'
import ActionToolbar from './components/ActionToolBar'
import CustomDrawer from './components/CustomDrawer'
import ExportToExcel from './components/ExportToExcel'


const dados = [{ }]


function App() {

  return (
    <>
      <CustomDrawer></CustomDrawer>
        
      
      <ActionToolbar title="Página de Dashboard">
          <ExportToExcel  data={dados} 
                          fileName="ExportData" 
                          tooltipText="Exportar dados" />
          {/* Aqui podem ser adicionados mais botões ou links conforme necessário */}
      </ActionToolbar>

      
      
    </>
  )

  
}



export default App
