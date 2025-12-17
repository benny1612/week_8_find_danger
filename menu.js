import input from 'analiza-sync';
import {FindDangerousPeople, GetCallRecordst, GetPeopleList, SearchPeoplebyAge, SearchPeoplebyName } from './func.js';
 async function menu(){
    const flag =true
    while(flag){
         let message= input("\nWhat would you like to do?\n1.Get People List:\n2.Get Call Records/Transcriptions:\n3.Search People by Name:\n4.Search People by Age: \n5.Find Dangerous People \n6.exit:\n>")
         switch(message){
            case "1":
                console.log (await GetPeopleList())
                break;
            case "2":
                console.log(await GetCallRecordst())
                break;
            case "3":
               let name=input("enter a name:\n>")
               await SearchPeoplebyName(name)
               break;
            case "4":
                let age =input("enter a age :\n>")
                await SearchPeoplebyAge(age)
                break;
            case "5":
                console.log("כרגע רק מחזיר את האובייקטים שמכילים את המילים ")
                await FindDangerousPeople()
                break;
            case "6":
                console.log("goodbye!")
                flag =false
                break;




         }
    }
}
menu()