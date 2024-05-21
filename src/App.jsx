import './index.css'
import { LineGraph } from './component/Line'
import { BarChart } from './component/Bar'
import { PieChart } from './component/Pie'
function App() {


  return (
    <>
      <div className='App'>
      <h2>My Fasting Chart</h2>
        <LineGraph/>
        <br/>
        <h2>My Expenses Chart</h2>
        <BarChart/>
        <br/> 
        <h2>My Social media usage Chart</h2>
        <PieChart/>
       


      </div>
    </>

  )
}

export default App
