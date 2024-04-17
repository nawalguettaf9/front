import Dashboard from "./scenes/dashboard"
import Projet from "./scenes/projet"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

export default function() {
    const data=[
        {
            id:0,
            label:"Dashboard",
            img:<DashboardIcon/>,
            component:<Dashboard/>,
            path:"/dashboard"
        },
        {
            id:1,
            label:"Projet",
            img:<AddHomeWorkIcon/>,
            component:<Projet/>,
            path:"/project"
        }
    
    ]
    return data
}
// // const data=[
//     {
//         id:0,
//         label:"Dashboard",
//         img:<DashboardIcon/>,
//         component:<Dashboard/>,
//         path:"/dashboard"
//     },
//     {
//         id:1,
//         label:"Projet",
//         img:<AddHomeWorkIcon/>,
//         component:<Projet/>,
//         path:"/project"
//     }

// ]
// export default data;

