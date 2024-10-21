import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate, Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import axios from "axios";
import jsonData from "./data";


export default function Home(){
    const {user, dispatch}=useAuthContext()
    const navigate=useNavigate();

    const [dashboardList, setDashboardList]=useState(["Dashboard","Settings","Profile"])

    const [sectionOpen, setSectionOpen]=useState("userMediaDetails")

    const[fetchedData, setFetchedData]=useState({"userMediaDetails": [{"json": jsonData}]})


    // useEffect(() => {
    //     if (!user) {
    //         navigate("/login")
    //     } 
    //     else{
    //         fetchList()
    //     }
    // }, []);

    // useEffect(() => {
    //     // Fetch data only if section is opened and data is not already available
    //     if (sectionOpen === "userMediaDetails" && !fetchedData["userMediaDetails"]) {
    //       fetchUserMediaDetails();
    //     }
    //   }, [sectionOpen]); // Trigger when sectionOpen changes

    // const fetchUserMediaDetails=async ()=>{
    //     try {
    //         const response = await axios.get("http://localhost:8081/api/dashboard", { headers: {"Authorization" : `Bearer ${user}`} });
           
    //         if (response.data) {
    //             const json=response.data
                
    //             setDashboardList(json)
            
    //         }
    //     } catch (error) {
    //         console.error("Failed to fetch userMediaDetails: ", error);
    //     }

    // }

    const fetchDashboardList = async () => {

        if (!user) {
        console.error("No user or token found");
        return;
        }

        try {
            const response = await axios.get("http://localhost:8081/api/dashboard", { headers: {"Authorization" : `Bearer ${user}`} });
           
            if (response.data) {
                const json=response.data
                
                setDashboardList(json)
            
            }
        } catch (error) {
            console.error("Failed to fetch Dashboard List: ", error);
        }
    };

    const [expandedIndex, setExpandedIndex] = useState(null); // Track only one expanded item

    const handleClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the same item or switch to another
    };

    return(
        <div className="flex flex-col">
            <Nav />

            <div className="flex">

                <div className="flex flex-col bg-slate-800 w-[15vw] min-h-screen shadow-lg overflow-y-auto">

                    <div className="flex flex-col w-full">

                        {dashboardList.map((item, index) => (
                            <li key={index} className="hover:bg-blue-600 p-2 rounded cursor-pointer">
                                {item}
                            </li>
                        ))}

                    </div>


                </div>

                <div className="flex flex-col w-full">
                    {sectionOpen==="userMediaDetails" && 
                        <div className="flex flex-col w-full">
                            <div className="flex text-white bg-gray-900 w-full"> 
                                <div className="ml-2 w-[5vw] flex justify-center">ID</div>
                                <div className="w-[10vw] flex justify-center">User ID</div>
                                <div className="w-[10vw] flex justify-center">Name</div>
                                <div className="w-[10vw] flex justify-center">Image URL</div>
                                <div className="w-[10vw] flex justify-center">PDF URL</div>
                                <div className="w-[10vw] flex justify-center">JSON</div>
                            </div>

                            {fetchedData["userMediaDetails"].map((item, index)=>(
                                <li key={index} className="flex flex-col text-white bg-gray-700 hover:bg-gray-500 p-2 w-full cursor-pointer" onClick={() => handleClick(index)}>
                                 <div className="flex">
                                    <div className="ml-2 w-[5vw] flex justify-center">{item["json"]["id"]}</div>
                                    <div className="w-[10vw] flex justify-center">{item["json"]["userID"]}</div>
                                    <div className="w-[10vw] flex justify-center">{item["json"]["name"]}</div>
                                    <Link to={item["json"]["imageURL"]} className="w-[10vw] flex justify-center">Image URL</Link>
                                    <div className="w-[10vw] flex justify-center">{item["json"]["PdfS3Url"]}</div>
                                
                                    <div className="w-[10vw] flex justify-center">JSON Data</div>

                                 </div>
                                 
                                <div>
                                    {expandedIndex === index && (
                                        <div className="flex flex-col border-black border-[1px] mt-10">
                                            <img src={item["json"]["imageURL"]} height="100px"   alt="Media Preview" className="h-80 w-80"/>
                                            <div className="mt-2 p-2 hover:bg-gray-500 text-sm whitespace-pre-wrap break-words">
                                                <pre className="whitespace-pre-wrap break-words">{JSON.stringify(item["json"]["JSONData"], null, 2)}</pre>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                


                                </li>

                            ))}
                        </div>
                    
                        

                    }    

                </div>
            
            
            </div>

            
        </div>
    )
}