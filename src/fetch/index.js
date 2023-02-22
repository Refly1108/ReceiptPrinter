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
  let opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  let result = await saveResultValidation(
    await fetchRequest(config.url.save, opts, true)
  );

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

  return result;
};

export const getPrintListValidation = async (result) => {
  console.log("getPrintListValidation");
  console.log(result);

  return result;
};
export const sleep = async (time) => {
  let d1 = new Date();
  console.log(parseInt(d1));
  while (parseInt(new Date() - d1) < time) {
    continue;
  }
  return "";
};
