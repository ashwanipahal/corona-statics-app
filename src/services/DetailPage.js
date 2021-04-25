export function fetchData(country) {
    return fetch(`https://api.covid19api.com/total/country/${country}`)
    .then((response) => {
      return response.json();
    }).catch(e=>{
      console.log("error logged",e);
    });
  }