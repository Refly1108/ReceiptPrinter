import config from "../config/config";

export function fetchRequest(url, opts, jsonFormat) {
  return new Promise((resolve, reject) => {
    fetch(url, opts)
      .then((response) => {
        console.log(response);
        if (jsonFormat) {
          return response.json();
        } else {
          return response;
        }
      })
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        resolve(false);
      });
  });
}

export const postToServer = async (data) => {
  let url = config.url.save;
  url += JSON.stringify(data);
  let opts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let result = await saveResultValidation(await fetchRequest(url, opts, true));

  return result;
};

export const getPrintListFromServer = async () => {
  let opts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let result = await getPrintListValidation(
    await fetchRequest(config.url.getlist, opts, true)
  );
  return result;
};

export const saveResultValidation = async (result) => {
  console.log("saveResultValidation");
  console.log(result);
  if (result.status == 0) {
    return true;
  } else {
    return false;
  }
};

export const getPrintListValidation = async (result) => {
  console.log("getPrintListValidation");
  console.log(result);
  let array = [];
  if (result.status == 0) {
    for (let index = 0; index < result.data.list.length; index++) {
      array.push(JSON.parse(result.data.list[index]));
    }
  }
  return array;
};
export const sleep = async (time) => {
  let d1 = new Date();
  console.log(parseInt(d1));
  while (parseInt(new Date() - d1) < time) {
    continue;
  }
  return "";
};

export const getuserinfo = async (result) => {
  console.log("getPrintListValidation");
  console.log(result);
  let array = [];
  if (result.status == 0) {
    for (let index = 0; index < result.data.list.length; index++) {
      array.push(JSON.parse(result.data.list[index]));
    }
  }
  return array;
};
