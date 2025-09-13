import {
  blue,
  deepOrange,
  green,
  orange,
  red,
  yellow,
} from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalculateIcon from "@mui/icons-material/Calculate";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import HiveIcon from "@mui/icons-material/Hive";
import HomeConfig from "./HomeConfig";
import {
  CalculateOutlined,
  HiveOutlined,
  Home,
  HomeOutlined,
  InsertChart,
  InsertChartOutlined,
  PieChart,
  PieChartOutline,
  PieChartOutlineOutlined,
} from "@mui/icons-material";
import DepositCalculator from "../DepositCalculator/DepositCalculator";

const fixedDeposit = {
  rate: 1000,
  period: 1,
  interest: 8,
  type: "fd",
};
const RecurringDeposit = {
  rate: 100,
  period: 1,
  interest: 9,
  type: "rd",
};
const CumulativeDeposit = {
  rate: 1000,
  period: 1,
  interest: 8,
  type: "cd",
};
const GoldLoan = {
  rate: 1000,
  period: 1,
  interest: 11.5,
  type: "gl",
};

const HomeData = [
  {
    name: "Home",
    icon: <Home />,
    icon2: <HomeOutlined />,
    color: orange,
    link: "/home",
    params: "home",
    component: <HomeConfig />,
  },
  {
    name: "Recurring Deposit",
    icon: <PieChart />,
    icon2: <PieChartOutlineOutlined />,
    color: red,
    link: "/rd",
    params: "rd",
    component: <DepositCalculator data={RecurringDeposit} />,
  },
  {
    name: "Fixed Deposit",
    icon: <CalculateIcon />,
    icon2: <CalculateOutlined />,
    color: green,
    link: "/fd",
    params: "fd",
    component: <DepositCalculator data={fixedDeposit} />,
  },

  {
    name: "Cumulative Deposit",
    icon: <InsertChart />,
    icon2: <InsertChartOutlined />,
    color: blue,
    link: "/cd",
    params: "cd",
    component: <DepositCalculator data={CumulativeDeposit} />,
  },
  {
    name: "Gold Loan",
    icon: <HiveIcon />,
    icon2: <HiveOutlined />,
    color: deepOrange,
    link: "/gl",
    params: "gl",
    component: <DepositCalculator data={GoldLoan} />,
  },
];

export default HomeData;
