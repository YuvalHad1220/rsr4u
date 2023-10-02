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
import EditableTabs from "../../General/Reusables/EditableTabs";
import { Box } from "@mui/material";
import { stringToRGBA } from "../../assets/globalFunctions";

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
        beginAtZero: true,
        ticks: {
            font: {
                weight: 'bold' // Set the label font weight to bold
            }
        }
    },
    x: {
        ticks: {
            font: {
                weight: 'bold' // Set the label font weight to bold
            }
        }
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
            borderWidth: 8,
            tension: 0.7
    }
    })
};

const MisdarLineGraph = () => {
    return (
        <CustomPaper sx={{height: "100%", padding: 1.5}}>
            <EditableTabs />
            <Box sx={{height: "90%"}}>
                <Line options={options} data={data} redraw/>
            </Box>
        </CustomPaper>
    )
};

export default MisdarLineGraph;