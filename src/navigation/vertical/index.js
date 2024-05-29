import { Mail, Home, Airplay, Circle } from "react-feather";
import student from "../../assets/images/student.png"
export default [
  {
    id: "Dashbord",
    title: "Dashbord",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "Course",
    title: "CourseList",
    icon: <Mail size={20} />,
    navLink: "/second-page",
  },
  {
    id: "student",
    title: "student",
    icon:<Mail size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "StudentList",
        title: "StudentList",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
      {
        id: "StudentEdit",
        title: "StudentEdit",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
      {
        id: "StudentUpdate",
        title: "StudentUpdate",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
      {
        id: "StudentDetail",
        title: "StudentDetail",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  },
];
