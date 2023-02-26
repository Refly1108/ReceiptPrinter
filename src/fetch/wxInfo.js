import config from "../config/config";
import { fetchRequest } from "../fetch";
const APPID = "wxa8f21527ef5c97c6";
const SECRET = "6c605ebc9bd0faf042098b49011ed60c";
const GRANT_TYPE = "authorization_code";

//scope为snsapi_base：

//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect

//scope为snsapi_userinfo：

//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx807d86fb6b3d4fd2&redirect_uri=http%3A%2F%2Fdevelopers.weixin.qq.com&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
export const getAccess_token = async (code) => {
  let url = config.wxurl.access_token;
  url = url + "appid=" + APPID;
  url = url + "&secret=" + SECRET;
  url = url + "&code=" + code;
  url = url + "&grant_type=" + GRANT_TYPE;
  let opts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let result = await fetchRequest(url, opts, true);
  console.log(getAccess_token);
  console.log(result);
  let userInfo = await getUserinfo(result);
  // console.log(result);
  //let userInfo = {};
  if (result.access_token) {
    userInfo = await getUserinfo(result);
  } else {
    // console.log(result);
  }
  //   {
  //     "access_token":"ACCESS_TOKEN",
  //     "expires_in":7200,
  //     "refresh_token":"REFRESH_TOKEN",
  //     "openid":"OPENID",
  //     "scope":"SCOPE",
  //     "is_snapshotuser": 1,
  //     "unionid": "UNIONID"
  //   }

  console.log(result);
  return result;
};

export const getUserinfo = async (token) => {
  let url = config.wxurl.userinfo;
  url = url + "access_token=" + token.access_token;
  url = url + "&openid=" + token.openid;
  url = url + "&lang=zh_CN";
  let opts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let useinfo = await fetchRequest(url, opts, true);
  console.log(useinfo);
  return useinfo;
};
