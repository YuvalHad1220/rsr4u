import CustomPaper from "../../General/Reusables/CustomPaper";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function stringToRGBA(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const r = (hash & 0xFF) + 50; // Increase red component to lighten the color
    const g = ((hash >> 8) & 0xFF) + 50; // Increase green component
    const b = ((hash >> 16) & 0xFF) + 50; // Increase blue component
    
    
    return {
        backgroundColor: `rgba(${r},${g},${b},0.2)`,
        borderColor: `rgba(${r},${g},${b},1)`
    };
}


const options: ChartOptions<'line'> = {
  responsive: true,
  normalized: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
        beginAtZero: true
    }
  }
};

const rData = [
    {
        name: "מקטנאר",
        dataPoints: [95, 0]
    },
    {
        name: "אקדמיה",
        dataPoints: [80, 10]
    },
    {
        name: "עתיד מבטיח",
        dataPoints: [30, 10]
    },
    {
        name: "אחזקות חוץ",
        dataPoints: [0, 0]
    }
];


// const labels = ["mekatnar", "academy", "promising future", "outside"];
const labels = ["נוכחות", "הערות משמעת"]
const data = {
    labels,
    datasets: rData.map(dataset => {
        return { 
            label: dataset.name,
            data: dataset.dataPoints,
            ...stringToRGBA(dataset.name),
            borderWidth: 4,
            tension: 0.4
    }
    })
};
    // datasets: [
    //     {
    //         label: "נוכחות",
    //         data: recievedData.map(unit => unit.dataPoints[0].value),
    //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //         borderColor: 'rgba(75, 192, 192, 1)',
    //         borderWidth: 4,
    //         tension: 0.4// Adjust the tension value here

    //     },
    //     {
    //         label: "הערות משמעת",
    //         data: recievedData.map(unit => unit.dataPoints[1].value),
    //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //         borderColor: 'rgba(255, 99, 132, 1)',
    //         borderWidth: 4,
    //         tension: 0.4 // Adjust the tension value here


    //     }
    // ]


const MisdarLineGraph = () => {
    return (
        <CustomPaper sx={{height: "100%",}}>
            <Line options={options} data={data} redraw/>
        </CustomPaper>
    )
};

export default MisdarLineGraph;