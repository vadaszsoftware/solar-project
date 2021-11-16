// site IDs to test with
// DhHCwgUy
// 1swwe8FB
// 5xoDk1WR

import { allSitesDb } from "./All_Sites_DB";

export async function fetchData(siteId) {
  let retVal;

  await fetch(`https://kiosk.wattch.io/api/${siteId}/data`)
    .then((response) => {
      // console.log("1: ", response);
      // console.log("2: ", response.json());
      return response.json();
    })
    .then((result) => {
      // console.log("data: ", result);
      retVal = result;
    });
  return retVal;
}

export async function fetchInfo(siteId) {
  let retVal;
  // console.log("site id: ", siteId);

  await fetch(`https://kiosk.wattch.io/api/${siteId}/info`)
    .then((response) => {
      //   console.log("1: ", response);
      // console.log("2: ", response.json());
      return response.json();
    })
    .then((result) => {
      // console.log("info: ", result);
      retVal = result;
    });
  return retVal;
}

export async function fetchOrgInfo(incomingSiteId) {
  let retVal = {
    totalSites: 0,
    totalPower: 0,
  };
  // let incomingSiteId = "9Qn92P6P";
  let orgSiteIds = [];
  // console.log(allSitesDb);
  let allSites = allSitesDb;
  allSites.forEach((org) => {
    // console.log("org: ", org);
    let siteIdMatch = org.sites.filter(
      (site) => site.siteId === incomingSiteId
    );
    // console.log("siteIdMatch: ", siteIdMatch);
    if (siteIdMatch.length > 0) {
      orgSiteIds = org.sites.map((i) => i.siteId);
      retVal.orgName = org.name;
    }
  });
  // console.log("orgSiteIds: ", orgSiteIds);
  if (orgSiteIds.length > 0) {
    retVal.totalSites = orgSiteIds.length;
    await orgSiteIds.forEach(async (siteId) => {
      // console.log("trying this siteId: ", siteId);
      await fetch(`https://kiosk.wattch.io/api/${siteId}/info`)
        .then(async (response) => {
          // console.log("1: ", response);
          // console.log("2: ", response.json());
          return await response.json();
        })
        .then(async (result) => {
          if (!isNaN(result.capacity))
            retVal.totalPower += await result.capacity;
        });
    });
  }

  // console.log("return value: ", retVal);
  return retVal;
}
