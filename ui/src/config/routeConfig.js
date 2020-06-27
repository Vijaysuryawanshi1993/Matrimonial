import about from "../screens/about";
import contact from "../screens/contact";
import faq from "../screens/faq";
import feedback from "../screens/feedback";
import home from "../screens/home";
import login from "../screens/login";
import matches from "../screens/matches";
import message from "../screens/message";
import privacy from "../screens/privacy_policy";
import register from "../screens/register";
import search from "../screens/search";
import service from "../screens/service";
import terms from "../screens/terms";

const myRoutes = [
    {
        path: '/',
        path_: '/',
        component: home,
        name: 'home',
        readablename: "home"
    },
    {
        path: '/about',
        path_: '/about',
        component: about,
        name: 'about',
        readablename: "about"
    },
    {
        path: '/contact',
        path_: '/contact',
        component: contact,
        name: 'contact',
        readablename: "contact"
    },
    {
        path: '/faq',
        path_: '/faq',
        component: faq,
        name: 'faq',
        readablename: "faq"
    },
    {
        path: '/feedback',
        path_: '/feedback',
        component: feedback,
        name: 'feedback',
        readablename: "feedback"
    },
    {
        path: '/login',
        path_: '/login',
        component: login,
        name: 'login',
        readablename: "login"
    },
    {
        path: '/matches',
        path_: '/matches',
        component: matches,
        name: 'matches',
        readablename: "matches"
    },
    {
        path: '/message',
        path_: '/message',
        component: message,
        name: 'message',
        readablename: "message"
    },
    {
        path: '/privacy-policy',
        path_: '/privacy-policy',
        component: privacy,
        name: 'privacy-policy',
        readablename: "privacy-policy"
    },
    {
        path: '/register',
        path_: '/register',
        component: register,
        name: 'register',
        readablename: "register"
    },
    {
        path: '/search',
        path_: '/search',
        component: search,
        name: 'search',
        readablename: "search"
    },
    {
        path: '/service',
        path_: '/service',
        component: service,
        name: 'service',
        readablename: "service"
    },
    {
        path: '/terms',
        path_: '/terms',
        component: terms,
        name: 'terms',
        readablename: "terms"
    }
]

export default myRoutes