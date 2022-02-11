import { blue, green, orange, red, yellow } from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalculateIcon from "@mui/icons-material/Calculate";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import HiveIcon from "@mui/icons-material/Hive";
import HomeConfig from "./HomeConfig";
import { Home } from "@mui/icons-material";
import FixedDeposit from "../Fixeddeposit/FixedDeposit";

const fixedDeposit={
  rate: 1000,
  period:1,
  interest:8,
  type:'fd'
}
const RecurringDeposit={
  rate: 100,
  period:1,
  interest:8.5,
  type:'rd'
}
const CumulativeDeposit={
  rate: 1000,
  period:1,
  interest:8.33,
  type:'cd'
}


const HomeData = [
  {
    name: "Home",
    icon: <Home />,
    color: orange,
    link: "/home",
    params:'home',
    component:<HomeConfig/>
  },
  {
    name: "Recurring Deposit",
    icon: <EqualizerIcon />,
    color: red,
    link: "/rd",
    params:'rd',
    component: <FixedDeposit data={RecurringDeposit}/>
  },
  {
    name: "Fixed Deposit",
    icon: <CalculateIcon />,
    color: green,
    link: "/fd",
    params:'fd',
    component: <FixedDeposit data= {fixedDeposit}/>
  },
  
  {
    name: "Cumulative Deposit",
    icon: <PivotTableChartIcon />,
    color: blue,
    link: "/cd",
    params:'cd',
    component: <FixedDeposit data={CumulativeDeposit}/>
  },
  {
    name: "Gold Loan",
    icon: <HiveIcon />,
    color: yellow,
    link: "/gl",
    params:'gl'
  }
  
];

export default HomeData;
