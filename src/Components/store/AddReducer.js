const initState=[];

const AddReducer=(state=initState,action)=>{
      
    switch(action.type){
      
        case 'ADD':
            return action.payload;

         case 'Update':
            return action.payload; 

         case 'Delete':
            return action.payload ;  
            
            
         default: return state;  
    }

}
export default AddReducer;