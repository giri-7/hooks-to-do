import React, {useState} from 'react';
import './App.css';

const App = props=>  {

const [state,changeState]= useState ({
name:"",
eventTitle:"",
details:"",
objdata:{},
list:[],
toggleIndex:"",
editName: "",
editEventTitle: "",
editDetails: "",
editObj: {}

});



const handleName = event => {

  changeState({
    ...state,
    name:event.target.value
  })
  


  }
const handleEventTitle = event => {

  changeState({
    ...state,
    eventTitle:event.target.value
  })
  }
const handleDetails = event => {

  changeState({
    ...state,
    details:event.target.value
  })
  } 




const submitHandle = (event) => {
    state.objdata['namevalue']= state.name;
    state.objdata['eventTitlevalue']=state.eventTitle;
    state.objdata['detailsvalue']=state.details;
    changeState({
         objdata: state.objdata
         }, () => {
            console.log("datasss",state.objdata)
            state.list.push(state.objdata);
            changeState({
                  list: state.list
                   }, () => {
                      console.log("arrayss are",state.list)
                          changeState({
                                objdata:{},
                                name:"",
                                eventTitle:"",
                                details:""

                              })

                          })

                  })

          } 


const resetHandle = (event) => {

changeState({
objdata:{},
name:"",
eventTitle:"",
details:""

          })
}

const editcard = (data,id)=> {
  console.log("testdata", data,id);
  changeState({
    toggleIndex:id
  })

}
const deletecard = (id) =>{
  state.list.splice(id,1);
  changeState({
    list:state.list
  })}


const updateName = (namevalue) => {
changeState({
editName: namevalue.target.value
})
}

const updateEventTitle = (e) => {
changeState({
editEventTitle: e.target.value
})
}

const updateDetails = (e) => {
changeState({
editDetails: e.target.value
})
}

const editUpdateCard = (user, idx) => {
console.log("toggleEditData", user, idx);
let oldName = user.namevalue;
let oldEventTitle = user.eventTitlevalue;
let oldDetails = user.detailsvalue;

changeState({
    editName: (state.editName) ?  state.editName : oldName,
    editEventTitle: (state.editEventTitle) ?  state.editEventTitle : oldEventTitle,
    editDetails: (state.editDetails) ? state.editDetails : oldDetails
  }, () => {
    console.log("state", state.editName, state.editEventTitle, state.editDetails)
    state.editObj['namevalue'] = state.editName;
    state.editObj['eventTitlevalue'] = state.editEventTitle;
    state.editObj['detailsvalue'] = state.editDetails;
    changeState({
      editObj: state.editObj
    }, () => {
      console.log("editObj", state.editObj)
      if(state.editName !== null && state.editEventTitle !== null && state.editDetails !== null){
        if( state.editName !== oldName || state.editEventTitle !== oldEventTitle
         || state.editDetails !== oldDetails) {


                let updateUserData = [...state.list];
                const indexToUpdate = updateUserData.findIndex(function(user, id){
                  return id === idx;
                })
                console.log("indexToUpdate", indexToUpdate);

                changeState({
                  list: [...state.list.slice(0, indexToUpdate), state.editObj, 
                  ...state.list.slice(indexToUpdate + 1)]
                })
        }
        changeState({
            toggleIndex: ""
          }, () => {
            changeState({
              editName: "",
              editEventTitle: "",
              editDetails: "",
              editObj: {}
            })
          })
      }

    })

  })
}


return (
<div >
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-5 text-center">Let's set your reminders</h1>
      </div>
    </div>
    <div className="bg-dark container-fluid">
    <div className="row">

    <div className="col-sm-12 col-md-4 col-lg-4 "></div>

    <div className="col-sm-12 col-md-4 col-lg-4 ">
    <div className="card login-card ">
    <div className=" card-header ">
    <h3 className="text-center"> TO-DO LIST FORM</h3>
    </div>

                    <div className="card-body">
                     <form className="form-elements">
                        <input value={state.name} className="form-control form-inputs form-elements" type="text"   onChange={handleName.bind(this)} placeholder="user name"/>
                        <input value={state.eventTitle} className="form-control form-inputs form-elements" type="text"   onChange={handleEventTitle.bind(this)} placeholder="Event Title"/>
                        <input value={state.details} className="form-control form-inputs form-elements" type="text"   onChange={handleDetails.bind(this)} placeholder="Details "/>
                      </form>
                    </div>

                   <div className="card-footer ">

                    <button type="submit" onClick={submitHandle.bind(this)} className="btn-primary offset-lg-1 offset-md-0  btn-sm ">Create</button>

                    <button type="reset" onClick={resetHandle.bind(this)} className="btn-primary  offset-lg-5  offset-md-0 btn-sm">cancel</button>


                   </div>

        </div>
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 "></div>

    </div>




        <div className="container-fluid  bg-dark">

        <div className="row ">

              {(state.list) ?
                <code>
              {(state.list.map((data,id)=>{

                if(id ===state.toggleIndex){

                  return(
                  <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="card todo-card">
                  <div className="card-header">
                  <input type="text" onChange={updateName.bind(this)} defaultValue ={data.namevalue}/>

                   </div>
                    <div className="card-title offset-3 " >
                     <input type="text" onChange={updateEventTitle.bind(this)}  defaultValue ={data.eventTitlevalue}/>
                     </div>
                    <div className="card-body">
                    <input type="text" onChange={updateDetails.bind(this)} defaultValue ={data.detailsvalue}/>

                    </div>
                    <div className="card-footer">
                         <button className="bt btn-success"onClick={editUpdateCard.bind(this, data, id)}>Update</button>
                         <button className="bt btn-warning" onClick={deletecard.bind(this,id)}>Delete</button>
                    
                    </div>
                    </div>
                    </div>
                  ); 
                }


                return(

                  <div className="col-sm-12 col-md-6 col-lg-4">
                   
                  <div className="card todo-card">
                  <div className="card-header">
                  <span className="badge badge-secondary">Total Task-Remaining -{id+1}</span>
                   
                  <h5>{data.namevalue}'s reminder</h5>

                  </div>

                    <div className="card-title text-center">
                       <h3><p><ins>{data.eventTitlevalue}</ins></p></h3>
                   </div>
                    <div className="card-body">
                    <h5>{data.detailsvalue}</h5>

                    </div>
                      <div className="card-footer">
                         <button className="bt btn-success" onClick={editcard.bind(this,data,id) }>Edit</button>
                       <button className="bt btn-warning" onClick={deletecard.bind(this,id)}>Delete</button>
                      </div>
                     </div>
                     </div>
                  );
              }))}
              </code>: null }
        </div>
        </div>
      </div>

        <div className="footer footer-copyright" style={{background:'#e9ecef'}}>
          <div className="container">
            <h6 className=" text-center">Just make it work ;)</h6>
          </div>
        </div>
</div>

);


}

export default App;

