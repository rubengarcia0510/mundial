import { Team } from "./team";

export class Group{
    name:String
 	teams:[Team]

    constructor(name:String,teams:[Team]){
        this.name=name
        this.teams=teams
    }
}