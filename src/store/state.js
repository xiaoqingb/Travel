// 当前城市
let defaultCity='梅州'; 
// 景点名称
let viewPoint='八达岭长城';
// 景点所在城市
let viewPointCity='北京';
try{
  if(localStorage.city){
    defaultCity=localStorage.city
  }
}catch(e){}
try{
  if(localStorage.viewPoint){
    viewPoint=localStorage.viewPoint
  }
}catch(e){}
try{
  if(localStorage.viewPointCity){
    viewPointCity=localStorage.viewPointCity
  }
}catch(e){}

export default{
    city: defaultCity,
    viewPointCity:viewPointCity,
    viewPoint:viewPoint,
}