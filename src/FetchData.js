// site IDs to test with
// DhHCwgUy
// 1swwe8FB
// 5xoDk1WR

export async function fetchData(siteId) {
  let retVal;

  await fetch(`https://kiosk.staging.wattch.io/api/${siteId}/data`)
    .then((response) => {
      // console.log("1: ", response);
      // console.log("2: ", response.json());
      return response.json();
    })
    .then((result) => {
      console.log("result: ", result);
      retVal = result;
    });
  return retVal;
}

export async function fetchInfo(siteId) {
  let retVal;
  // console.log("site id: ", siteId);

  await fetch(`https://kiosk.staging.wattch.io/api/${siteId}/info`)
    .then((response) => {
      //   console.log("1: ", response);
      // console.log("2: ", response.json());
      return response.json();
    })
    .then((result) => {
      console.log("result: ", result);
      retVal = result;
    });
  return retVal;
}
