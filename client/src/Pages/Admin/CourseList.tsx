import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import { deleteData, getdata } from '../../api/req'
import { url } from '../../api/url'
import { FaRegEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";

const CourseList = () => {
    const navigate = useNavigate()
    const [data, setData] = useState()

    const getCourse = async () => {
        const response = await getdata("/courses")
        setData(response.data.data)
    }
    useEffect(() => {
        getCourse()
    }, [])

    console.log(data)
    return (
        <div className=' min-h-screen bg-gradient-to-r from-blue-300 to-green-300  dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className=" min-w-[60%] h-full">
                    <div className="overflow-x-auto  overflow-y-auto  h-[97vh] bg-slate-100 p-2 rounded-xl ">
                        <table className="table-auto w-full bg-white border border-gray-200 text-center ">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-4 py-2 text-center">ID</th>
                                    <th className="px-4 py-2 text-center">Image</th>
                                    <th className="px-4 py-2 text-center">Title</th>
                                    <th className="px-4 py-2 text-center">Edit</th>
                                    <th className="px-4 py-2 text-center">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((items, i) => (
                                    <tr key={i}>
                                        <td className="border px-4 py-2">{i + 1}</td>
                                        <td className="border px-4 py-2 max-w-md flex justify-center">
                                            <img src={`${url}/uploads/${items?.cardImage}`} alt="" className='w-28 aspect-square object-cover ' />
                                        </td>
                                        <td className="border px-4 py-2 max-w-md">
                                            {items?.heading}
                                        </td>
                                        <td className="border px-4 py-2 ">
                                            <button  
                                            onClick={() => navigate("/admin/courselist/edit/" + items._id, { state: items })}>
                                                <FaRegEdit size={25} className='text-green-900'/>
                                            </button>
                                        </td>
                                        <td className="border px-4 py-2 ">
                                            <button >
                                            <RiDeleteBin5Fill  size={25} className='text-red-500'/>
                                                {/* <MdDelete size={25} /> */}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseList