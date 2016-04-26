// 用户的状态
const Statue = {
	LOGINING: "LOGINING",
	LOGINED: "LOGINED",
	LOGOUTED: "LOGOUTED",
	LOGINERROR: "LOGINERROR"
}

// 个人信息的状态
const Info = {
	GETINFO: "GETINFO",
	GETINFOERROR: "GETINFOERROR",
	UPDATEINFO: "UPDATEINFO",
	UPDATEINFOERROR: "UPDATEINFOERROR",
	UPDATEREMARK: "UPDATEREMARK",
	UPDATEREMARKERROR: "UPDATEREMARKERROR"
}

// 好友相关的状态
const Friend = {
	GETFRIENDS: "GETFRIENDS",
	GETFRIENDSERROR: "GETFRIENDSERROR"
}


export { Statue, Info, Friend };