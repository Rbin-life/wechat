// 用户的状态
const Statue = {
	LOGINING: "LOGINING",
	LOGINED: "LOGINED",
	LOGOUTED: "LOGOUTED",
	LOGINERROR: "LOGINERROR"
}

// 个人信息的状态
const PersonInfo = {
	GETINFO: "GETPERSONINFO",
	GETINFOERROR: "GETPERSONINFOERROR",
	UPDATEINFO: "UPDATEPERSONINFO",
	UPDATEINFOERROR: "UPDATEPERSONINFOERROR",
	OPENPERSONINFOMODAL: "OPENPERSONINFOMODAL",
	CLOSEPERSONINFOMODAL: "CLOSEPERSONINFOMODAL"
}

// 菜单显示状态
const Menu = {
	SHOW: "MENUSHOW",
	HIDE: "MENUHIDE"
}

// 好友相关的状态
const Friend = {
	GETINFO: "GETFRIENDINFO",
	GETINFOERROR: "GETFRIENDINFOERROR",
	UPDATEREMARK: "UPDATEFRIENDREMARK",
	UPDATEREMARKERROR: "UPDATEFRIENDREMARKERROR",
	GETFRIENDS: "GETFRIENDS",
	GETFRIENDSERROR: "GETFRIENDSERROR",
	OPENFRIENDMODAL: "OPENFRIENDMODAL",
	CLOSEFRIENDMODAL: "CLOSEFRIENDMODAL",
	CURRENTFRIENDMODAL: "CURRENTFRIENDMODAL"
}


export { Statue, PersonInfo, Menu, Friend };