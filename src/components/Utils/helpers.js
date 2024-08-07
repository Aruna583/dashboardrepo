import { VscHome } from "react-icons/vsc";
import { TbClipboardCheck } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { TbCopyCheckFilled } from "react-icons/tb";
import { TbCopyXFilled } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { BiSolidCartAdd } from "react-icons/bi";
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';

export const SideBarData = [
    {
        icon: VscHome,
        heading: 'DashBoard'
    },
    {               
        icon: CiWallet,
        heading: 'wallet'
    },
    {
        icon: TbClipboardCheck,
        heading: 'clipboard'
    },
    {
        icon: CiWallet,
        heading: 'wallet'
    },
    {
        icon: IoBagCheckOutline,
        heading: 'check'
    }
]


export const CardsData = [
    {
        title: 'Total Order',
        imageIcon: <BiSolidCartAdd />,
        percentage: 3,
        totalNum:'75',
        triangle: <GoTriangleUp />,
        textColor: '#4b0082',
        color: {
            backGround: 'linear-gradient(to right, #f3e9f7, #e0d4ed)',
            boxShadow: "0 4px 8px rgba(75, 0, 130, 0.2)",
        },
        iconColor:{
            backGround: '#e0d4ed',
            color: '#4b0082'
        }

    }, 
    {
        title: 'Total Delivered',
        imageIcon: <TbCopyCheckFilled />,
        percentage: 3,
        totalNum:'70',
        triangle: <GoTriangleDown />,
        textColor: "#004d00",
        color: {
            backGround: "linear-gradient(to right, #e6ffe6, #ccffcc)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        iconColor:{
            backGround: '#ccffcc',
            color: '#006600'
        }

    },
    {
        title: 'Total Cancelled',
        imageIcon: <TbCopyXFilled />,
        percentage: 3,
        totalNum:'05',
        triangle: <GoTriangleUp />,
        textColor:'#800000',
        color: {
            backGround:
              "linear-gradient(to right, #fce4e6, #f8d7da)",
            boxShadow: "0 4px 8px rgba(114, 28, 36, 0.2)",
        },
        iconColor:{
            backGround: '#f8d7da',
            color: '#721c24'
        }
    },
    {
        title: 'Total Revenue',
        imageIcon: <RiMoneyDollarCircleFill />,
        percentage: 3,
        totalNum:'$12K',
        triangle: <GoTriangleDown/>,
        textColor: '#003366',
        color: {
            backGround: "linear-gradient(180deg, #A1C4FD 0%, #C2E9FB 100%)",
            boxShadow: "0px 10px 20px 0px #A1C4FD",
        },
        iconColor:{
            backGround: '#cce7ff',
            color: '#003366'
        }
    },

]

export const SalesCardData = [{
    title: 'The values here has been rounded off',
    profitValue: '$6759.25',
    percentage: 3,
    triangleIcon: <GoTriangleUp />,
    barValue: 70,
    color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
}]


export const FeedbackData = [
    {
        id:1,
        name: 'John Doe',
        review: 'Excellent service',
        rating: 5,
        imageUrl: img1
    },

    {
        id:2,
        name: 'John Hawkin',
        review: 'Food is very delicious and good service',
        rating: 4,
        imageUrl: img2
    }
]
