import { memo } from "react"
import Navbar from "../../components/navbar/Navbar"
import Category from "../../components/category/Category"
import UserSuggestion from "../../components/userSuggestion/UserSuggestion"

function Home(){
   
    return(
        <>
            <Navbar />
            <Category />
            <UserSuggestion />
        </>
    )
}
export default memo(Home)