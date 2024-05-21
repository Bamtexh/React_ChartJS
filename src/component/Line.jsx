import {Line} from 'react-chartjs-2'
import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      plugins,
    } from 'chart.js';

import { lineChartData } from './DUMMY_DATA';

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

export const LineGraph = () => {
    const options ={
      responsive:true
    };

    const data ={}
  return (
      <div className="line-container">
        <Line options={options} data={lineChartData}/>
      </div>
  )
}
