import { Friend } from "../constants";
const assign = Object.assign;

export default function friendsList(state = [], action){
	switch(action.type){
		case Friend.GETFRIENDS:
			return action.list;
	}
	return state;
}