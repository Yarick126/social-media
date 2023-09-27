import AboutUs from "../components/screens/AboutUs/AboutUs.jsx";
import Contacts from "../components/screens/Contacts/Contacts.jsx";
import Delivery from "../components/screens/Delivery/Delivery.jsx";
import FeedBack from "../components/screens/FeedBack/FeedBack.jsx";
import Home from "../components/screens/Home/Home.jsx";
import Stocks from "../components/screens/Stocks/Stocks.jsx";

export const ROUTES = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/aboutUs',
    component: AboutUs
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/feedBack',
    component: FeedBack
  },
  {
    path: 'Stocks',
    component: Stocks
  }
]