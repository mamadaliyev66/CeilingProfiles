import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs ,getDoc,doc,deleteDoc} from "firebase/firestore";
import { db ,firestore} from "../../../config/firebase";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

export default function DeleteComputer() {
    const id= useParams('id').id;

    const [computersData,setcomputersData]=useState()
    const [loading,setloading]=useState(true)
  
    const [fullName,setFullName]=useState()
    const [phoneNumber,setPhoneNumber]=useState()
    const [telegram,setTelegram]=useState()
    const [viloyat,setViloyat]=useState()
    const [tuman,setTuman]=useState()
    const [success,setSuccess]=useState('alert alert-success absolute z-40 top-[10%] sm:w-[25%] sm:left-[40%] hidden')
  
    useEffect(() => {
      const Check= async ()=>{
        try {
         
        
          } catch (error) {
        }

      }
      Check()
        const fetchcomputersData = async () => {
            try {
              const collectionRef = firestore.collection('noutboklar').where('id','==',id);
              const snapshot  = await collectionRef.get();
              const fetchedData = snapshot.docs.map(doc => doc.data());
              setcomputersData(fetchedData);
              console.log(fetchedData);
              // console.log(fetchedData);
      
      
            } catch (error) {
              console.error('Error fetching data from Firestore:', error);
            }finally{
                setloading(false)
            }
          };
          fetchcomputersData()
    
      }, [id]);
  
      const deleteDocument = async (docId) => {
        try {
        
          const docRef = doc(firestore, 'noutboklar', docId);
          await deleteDoc(docRef);
          console.log(`Document with ID ${docId} deleted successfully.`);
          setcomputersData((prevComp) => prevComp.filter(comp => comp.id !== docId)); // Update the state to remove the deleted order
          alert('Computer deleted successfully ! ! ! ')
        } catch (error) {
          console.error("Error deleting document: ", error);
        }
      };
     

     
    return (
      <>
      <div role="alert " className={success} >
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your purchase has been confirmed!</span>
      </div>
    <div className="md:flex ">
  
  
  {loading?(<>
            <div className="text-center items-center md:mt-[25%] mt-[50%]">
                <span className="loading loading-dots loading-lg bg-primary  md:w-16 "></span>
            </div>
        </>):(
          <div className="w-full mt-9 sm:px-9 px-2 ">
  {computersData?(computersData.map((computer,i)=>{
                return(
                    
                              
                  <div className="collapse collapse-arrow bg-base-200  " key={i}>
                  <input type="checkbox" className="peer" /> 
                  <div className="collapse-title bg-primary text-center  text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
                  <img src={computer.asosiy_rasm} className="max-w-sm sm:block hidden rounded-lg shadow-2xl w-20" />
  
                    <div className="mx-auto sm:text-xl">{computer.nomi}</div>
                    
                  </div>
                 
                  <div className="collapse-content bg-primar  light:peer-checked:border text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                  <p className="py-6"><span className="mx-1">CPU </span>: <span className="mx-1">{computer.cpu}</span></p>
                  <p className="py-6"><span className="mx-1">Qo'shimcha malumotlar </span>: <span className="mx-1">{computer.description}</span></p>
                  
                  {computer.narxi?(

<div className="badge badge-outline h-full">Narxi: {computer.narxi}</div>  
):(<></>)}                  <img src={computer.rasmi} className="max-w-sm sm:hidden block rounded-lg shadow-2xl w-32" />
  
  
                  </div>
                </div>
                
                        
                               
                            )})):(<></>)}   
          </div>
         )}
  
  {/* <hr className="my-3 h-3"/> */}
  <div className="hero w-full mt-9">
  <div className="hero-content  w-full ">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <div>
                <h1 className="text-lg text-center animate-pulse">Ushbu Mahsulotni O'chirishga Ishonchingiz Komilmi?</h1>
                <div className="space-y-6 mt-6">
                    <button onClick={(()=>{deleteDocument(id)})} className="btn btn-ghost w-full bg-red-600 text-white">O'chirish</button>
                    <Link className="btn btn-ghost w-full bg-blue-600 text-white" to={'/computers/'}><button >Bekor Qilish</button></Link>
                </div>
         </div>
    </div>
  </div>
  </div>
  
  
  
    </div>
    </>
  )
}
