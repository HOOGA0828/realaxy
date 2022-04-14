import styled from "@emotion/styled";

// component
import HomeHeader from "components/home/HomeHeader"
import HomeSell from "components/home/HomeSell"
import HomeWhat from "components/home/HomeWhat"
import HomeCreate from "components/home/HomeCreate"
import HomeSocial from "components/home/HomeSocial"
import HomeRoad from "components/home/HomeRoad"
import HomeFooter from "components/home/HomeFooter"



export default function Home () {
    return (<>
        <HomeHeader/>
        <HomeSell/>
        <HomeWhat/>
        <HomeCreate/>
        <HomeSocial/>
        <HomeRoad/>
        <HomeFooter/> 
    </>)
}