import { blue, green, red, yellow } from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalculateIcon from "@mui/icons-material/Calculate";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import HiveIcon from "@mui/icons-material/Hive";

const HomeData = [
  {
    name: "Fixed Deposit",
    icon: <CalculateIcon />,
    color: green,
    link: "/calculator/fd",
    params:'fd'
  },
  {
    name: "Recurring Deposit",
    icon: <EqualizerIcon />,
    color: red,
    link: "/calculator/rd",
    params:'rd'
  },
  {
    name: "Cumulative Deposit",
    icon: <PivotTableChartIcon />,
    color: blue,
    link: "/calculator/cd",
    params:'cd'
  },
  {
    name: "Gold Loan",
    icon: <HiveIcon />,
    color: yellow,
    link: "/calculator/gl",
    params:'gl'
  },
];

export default HomeData;
