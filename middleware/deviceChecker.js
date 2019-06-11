// import axios from 'axios'
export default function ({req, redirect, route,isServer}) {
    // console.log('process : ', process);
    // console.log('context : ', context);
    // console.log('store : ', store);
    // console.log('redirect : ', redirect);
    // console.log('route : ', route);
    ///Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent;
    console.log('userAgent : ', userAgent)

    if(isMobile(userAgent)){
        const type = getMobileType(userAgent);
        if(!/m\./i.test(req.headers.host) ){
            console.log('모바일 페이지로 리다이렉팅 : Mobile type : ', type);
            // redirect(`//m.${req.headers.host}${route.fullPath}`);
        }
    } else {
        const type =  getBrowserType(userAgent);
        console.log('Desctop type : ', type);
    }
}

const getBrowserType = userAgent => {
    const ua = userAgent.toLowerCase(); 
    if(ua.indexOf('edge/') > -1 ) {
        return "edge";
    }
    if(ua.indexOf('whale')>-1){
        return 'whale';
    }
    if((ua.indexOf("opera") || ua.indexOf('opr')) != -1 ) {
        return "Opera";
    } else if(ua.indexOf("chrome") != -1 ){
        return "Chrome";
    } else if(ua.indexOf("safari") != -1){
        return "Safari";
    } else if(ua.indexOf("firefox") != -1 ) {
        return "Firefox";
    } else {
        return "no";
    }
}

const getMobileType = userAgent => {
    const ua = userAgent.toLowerCase(); //userAgent 값 얻기
    let device = '';
    if (ua.match('android') != null) {
        device = 'android ';
    } else if (ua.indexOf("iphone")>-1||ua.indexOf("ipad")>-1||ua.indexOf("ipod")>-1) { 
        device = "ios ";
    } else {
        device = "etc ";
    }
    if((ua.indexOf("opera") || ua.indexOf('opr')) != -1 ) {
        device += "Opera";
    } else if(ua.indexOf("chrome") != -1 ){
        device += "Chrome";
    } else if(ua.indexOf("safari") != -1){
        device += "Safari";
    } else if(ua.indexOf("firefox") != -1 ) {
        device += "Firefox";
    } else {
        device += "no";
    }
    return device;
}

const isMobile = userAgent => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);