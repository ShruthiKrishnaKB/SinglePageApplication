import {faFileLines,faUser,faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { faFileAlt,faBrain,faNewspaper,faUsers,faFilePen} from '@fortawesome/free-solid-svg-icons'
const FirstSectionFull = [
    {
        title:'Buzz Home',
        url:'/',
        cName:'default',
        idName:'/',
        fontIcon:faFileLines,
        count:'',
        index:1,
    },
    {
        title:'My Buzz Posts',
        // url:'/Navlink',
        url:'/mybuzzposts',
        idName:'/mybuzzposts',
        cName:'lineOne',
        fontIcon:faFileLines,
        count:8,
        index:2,
    },
    {
        title:'Draft Posts',
        // url:'/Navlink',
        url:'/draftposts',
        idName:'/draftposts',
        cName:'lineOne',
        fontIcon:faFilePen,
        count:2,
        index:3,
    },
    {
        title:'My Followers',
        // url:'/Navlink',
        url:'/myfollowers',
        idName:'/myfollowers',
        cName:'lineOne',
        fontIcon:faUser,
        count:33,
        index:4,
    },
    {
        title:'I am Following',
        // url:'/Navlink',
        url:'/iamfollowing',
        idName:'/iamfollowing',
        cName:'lineOne',
        fontIcon:faUser,
        count:33,
        index:5,
    },
    {
        title:'My Teams',
        // url:'/Navlink',
        url:'/myteams',
        idName:'/myteams',
        cName:'lineOne',
        fontIcon:faUsers,
        count:12,
        index:6,
    },
    {
        title:'My Reportees',
        // url:'/Navlink',
        url:'/myreportees',
        idName:'/myreportees',
        cName:'lineOne',
        fontIcon:faAddressCard,
        count:12,
        index:7,
    },
    {
        title:'Applications',
        // url:'/Navlink',
        url:'/applications',
        idName:'/applications',
        fontIcon:faFileLines,
        cName:'show-more',
        count:9,
        index:8,
    },
    {
        title:'Logs',
        // url:'/Navlink',
        url:'/logs',
        idName:'/logs',
        fontIcon:faFileLines,
        cName:'show-more',
        count:8,
        index:9,
    },
    {
        title:'Get Support',
        // url:'/Navlink',
        url:'/getsupport',
        idName:'/getsupport',
        fontIcon:faAddressCard,
        cName:'show-more',
        count:2,
        index:10,
    },
    
]


const SecondSectionFull = [
    {
        title:'New Artefacts',
        // url:'/Navlink',
        url:'/newartefacts',
        idName:'/newartefacts',
        fontIcon:faFileAlt,
        count:82,
        index:1
    },
    {
        title:'New Modules',
        // url:'/Navlink',
        url:'/newmodules',
        idName:'/newmodules',
        fontIcon:faNewspaper,
        count:42,
        index:2
    },
    {
        title:'New Skills',
        // url:'/Navlink',
        url:'/newskills',
        idName:'/newskills',
        fontIcon:faBrain,
        count:23,
        index:3
    },
    {
        title:'Rules',
        // url:'/Navlink',
        url:'/rules',
        idName:'/rules',
        fontIcon:faFileAlt,
        count:82,
        index:4
    },
    {
        title:'Extensions',
        // url:'/Navlink',
        url:'/extensions',
        idName:'/extensions',
        fontIcon:faNewspaper,
        count:42,
        index:5
    },
]

const Sidesection=[
    ...FirstSectionFull,...SecondSectionFull
]


export { FirstSectionFull,SecondSectionFull,Sidesection}