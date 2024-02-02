import { connectionStr } from "@/lib/db";
import { Log } from "@/lib/modal/log";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
//http://localhost:3000/api/sensorlog/65b66ffd98c43fef2154cd2f,dgsd,fdjh,nfdj,djdt





export async function GET (request, content){
  
    const text = content.params.sensorlogid.toString();
    //console.log(text); 
       const myArray = text.split(",");
         
        
       const logId =myArray[0];
       const filter = {_id:logId}
         
       const launchDate = new Date();
               //                   
      const futureDate = new Date();
       futureDate.setTime(launchDate.getTime());
       
       //console.log(futureDate);
       // Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"
       
     //  const fiveMinutesInMillis =5* 60 * 60 * 1000;
      // futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);
       
       //console.log(futureDate);
       // Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
       // Note: your timezone may vary






       var currentdate = new Date(); 
    
       var datetime = (currentdate.getMonth()+1)  + " " +  currentdate.getDate() +", " + currentdate.getFullYear()+", " +(currentdate.getHours()) + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

                      
       const payload = {
        firstname: myArray[1],
          lastname: myArray[2],
           address: myArray[3],
           time: datetime,
            }
        
         await mongoose.connect(connectionStr);
         const result = await Log.findOneAndUpdate(filter, payload)
         //console.log(content)
         //console.log(request);
         //console.log(payload); 
         return NextResponse.json({ payload, futureDate, sucess:true})

  
    
}
