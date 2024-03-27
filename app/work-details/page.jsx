"use client";

import "../../styles/WorkDetails.scss";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import Viewer from "../../components/Viewer"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const WorkDetails = () => {
  const [loading, setLoading] = useState(true);
  const [work, setWork] = useState({});
  const searchParams = useSearchParams();
  const workId = searchParams.get("id");
  // console.log(workId)

  /* GET WORK DETAILS */
  useEffect(() => {
    const getWorkDetails = async () => {
      const response = await fetch(`api/work/${workId}`, {
        method: "GET",
      });
      const data = await response.json();
      setWork(data);
      setLoading(false);
    };

    if (workId) {
      getWorkDetails();
    }
  }, [workId]);

  const { data: session, update } = useSession();

  const userId = session?.user?._id;
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]


  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <div className="work-details">

        <div className="title">
          <h1>{work.common_name}</h1>
        </div>
        <br/>

        <div style={{
          width: "100%"
        }}>
          <div style={{
            float: "left", 
            width: "65%",
            height: '100%',
            
            }}
            className="image-container">
            <Viewer data={work.cid}/>
          </div>

          <div style={{
            float: "right", 
            width: "35%",
            height: '100%',
            
            }}
            className="">
            {/* metadata edit here <<< */}
            <table>
                <tr>
                  <td>Institution</td>
                  <th>{work.institution}</th>
                </tr>
                <tr>
                  <td>Location</td>
                  <th>{work.location}</th>
                </tr>
                <tr>
                  <td>Excavation Date</td>
                  <th>{work.excavation_date}</th>
                </tr>
                <tr>
                  <td>Elements Grouping</td>
                  <th>{work.elements_grouping}</th>
                </tr>

            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;
