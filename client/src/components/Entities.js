// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getEntities } from "../actions/entityActions";

// class Entities extends Component {
  
  
//   componentWillMount() {
//     this.props.getEntities();
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.newEntity) {
//       this.props.entities.unshift(nextProps.newEntity);
//     }
//   }

//   render() {
//     const { user } = this.props.auth;
//     console.log(user);
    
//     console.log("hi");
//     console.log(this.props.entities);
    
//     var c=0;
//     const entityItems = this.props.entities.map((entity) => (
//       <div key={c++}>
//         <h3>{entity.display}</h3>
//         <p>{entity.kind}</p>
//       </div>
//     ));
//     return (
//       <div>
//         <h1>Entities</h1>
//         {entityItems}
//       </div>
//     );
//   }
// }

// Entities.propTypes = {
//   getEntities: PropTypes.func.isRequired,
//   entities: PropTypes.array.isRequired,
//   newEntity: PropTypes.object,
// };

// const mapStateToProps = (state) => ({
//   entities: state.entities.entities,
//   newEntity: state.entities.entity,
//   auth: state.auth
// });

// export default connect(mapStateToProps, { getEntities })(Entities);


import React, { Component } from 'react'
import Axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Entities extends Component {
         state = {
           entities: [],
           det:[],
           syn:[],
           trfl:false,
           name:'',
           enp:[],
           date : new Date()
         };

         componentDidMount() {
           Axios.get("/list").then((res) => {
             this.setState({ entities: res.data });
             console.log(this.state.entities);
             
             
           });
         }
         
         render() {
           return (
             <div>
               <div className="row">
                 <div className="col  md4 center-align" style={{marginRight:150,marginLeft:150}}>
                   <h4><b>Entities</b></h4>
                   <ul>
                     {this.state.entities.map((ent) => (

                      
                       <li key={ent.entities[0].value}>
                         <button onClick={() => {
                    
                           //console.log(ent.entities);
                            
                           this.setState({det: ent.entities},()=>{
                             //console.log(this.state.det);
                             console.log("HI");
                             
                           })
                             //console.log(this.state.det);
                             
                           
                           {this.setState({name: ent.display})}
                           {this.setState({trfl: true})}
                           
                         }} style={{
                           width: "140px",
                           borderRadius: "3px",
                           letterSpacing: "1.5px",
                         }}
                           className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                         >{ent.display}</button>
                         <br /> <br /> <br />
                       </li>
                      
                    ))}
                     
                   </ul>

                 </div>
                 {this.state.trfl &&
                 <div className="col md8" style={{marginLeft:100,marginTop:150}}>
                   <div>
                     <h5><b>Entity Name </b> {this.state.name} <br /> <br /></h5>
                     

                      <div>
                     {this.state.det.map(val=>(
                       <h5 key={val.value}>
                          <p><b>{val.value} : </b> </p>
                          
                          <p>{val.synonyms.join()}</p>
                       </h5>
                      //  console.log(this.state.det);
                       
                      //  console.log(val);
                      //  console.log("JJ");
                      
                        // console.log(val.synonyms);
                      
                        // console.log(val.value);
                     )
                        )}
                     </div>
                      
                   </div>
                   <br/><br/>
                   <button  onClick={()=>{
                     { this.setState({ trfl: false }) }
                   }}
                   
                   style={{
                     width: "140px",
                     borderRadius: "3px",
                     letterSpacing: "1.5px",
                   }}
                     className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Close
                   </button>
                 </div>
                   
                 }
               </div>
               <div className="col center-align">
                 
               </div>
             </div>
           );
         }
       }

Entities.propTypes = {
  
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {  })(Entities);
