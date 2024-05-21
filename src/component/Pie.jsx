import  {Pie} from 'react-chartjs-2'
import {
      Chart as ChartJS,
      Tooltip,
      Legend,
      ArcElement
    } from 'chart.js';

import { pieChartData } from './DUMMY_DATA';

    ChartJS.register(
      Tooltip,
      Legend,
      ArcElement
    )

export const PieChart = () => {
    const options ={}
  return (
    <div className='pie-container'>
        <Pie options={options} data={pieChartData}/>
    </div>
  )
}

export default Pie