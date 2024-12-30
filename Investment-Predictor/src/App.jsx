import Header from "./components/Header";
import UserInput from "./components/UserInput";
import InvestmentResults from "./components/InvestmentResults";
import { useState } from "react"


function App() {
  const [userInfo,setUserInfo] = useState({
    initialInvestment:"",
    annualInvestment:"",
    expectedReturn:"",
    duration:""
})

  function changeUserInfo(newUserInfo) {
    setUserInfo(newUserInfo);
  }

  const displayData = (userInfo.initialInvestment !== "") && (userInfo.annualInvestment !== "") 
  && (userInfo.expectedReturn !== "") && (userInfo.duration !== "")

  
  return (
    <>
      <Header />
      <UserInput changeUserInfo = {changeUserInfo} userInfo = {userInfo}/>
      {displayData && <InvestmentResults userInfo = {userInfo}/>}
    </>
  )
}

export default App
