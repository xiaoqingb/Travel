export default{
    changeCity(state,city){
      state.city=city;
      try{
        localStorage.city=city;
      }catch(e){} 
    },
    changeViewPoint(state,viewPoint){
      state.viewPoint=viewPoint;
      try{
        localStorage.city=city;
      }catch(e){} 
    },
    changeViewPointCity(state,viewPointCity){
      state.viewPointCity=viewPointCity;
      try{
        localStorage.viewPointCity=viewPointCity;
      }catch(e){} 
    }

}