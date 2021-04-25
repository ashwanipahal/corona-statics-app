export function fetchListDataApi() {
  return fetch(`https://api.covid19api.com/summary`)
  .then((response) => {
    return response.json();
  }).catch(e=>{
    console.log("error logged",e);
  });
}
