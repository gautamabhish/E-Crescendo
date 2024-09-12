import connect from '@/dbConfig/connect';
import teamModel from '@/models/teamModels';
import {NextResponse } from "next/server";
connect();
export async function GET(){
    try{
        const res=await teamModel.find({});
        return NextResponse.json({message:"Teams Data Reterived",success:true,res},{status:200});
    }
    catch(error:any){
        return NextResponse.json({message:"Error Occur in Reteriving the data",error:error.message},{status:500});
    }
}