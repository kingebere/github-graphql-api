import React , {FunctionComponent,useState}from "react";
import "../JobsWrapper.css"
import {useLazyQuery} from "@apollo/client"
import Userslist from "../../components/userlist"
import  {GET_USERS} from "../../getjobs"
import{Query} from "../../Generated/graphql"



const UserSearch:FunctionComponent<{}> = () => {
    const [query, setquery] = useState<string>('');
          
    const [searchuserquery,{data}] = useLazyQuery<Query>(GET_USERS)

          console.log(data)
    const onSubmit =( e: React.FormEvent<HTMLFormElement> )=> {
    e.preventDefault();
    
     searchuserquery({variables:{query:query}})
   
  } 

    return(

       //submit form for inputting user's name
         <div className="site-wrapper">
           <div className="User-section">
    <div className="repo_bottom"></div>
        <div className="container"> 
         <div className="row">
             <div className="col-12">
    <form id='add-book' onSubmit={onSubmit}>
      
<div className="form_wrapper flex flex1 space-between align-items-center">
                         <input  placeholder="Enter Username" onChange={(e) => setquery(e.target.value)} type='text'/> 
                             <button className="button">Search</button>
                         </div>
      
      
      </form>
      
  
      
     

   
     
        { data===null  ||  data===undefined  ? (
            <div>loading...</div>
        ):
        
    (
        <div>
       
         
  
              {/* {  data.search.edges?.map((ships)=>
 
    { if (ships?.node?.__typename === 'User'){
                     (
                       <>
               
                     <Userslist key={ships?.node?.id} ships={ships?.node} />
              </>)
                     
                }else{
                    <div>nothing</div>
                }
 }
        )} */}
        {
          <Userslist ships= {data.search}/>
        }
        </div>
    )} </div>
        </div>
        </div>
        </div>
        </div>
    )
  };

  export default UserSearch;