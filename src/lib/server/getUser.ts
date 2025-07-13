
import { User } from "@/generated/prisma";
import { prisma } from "../prisma/client";

export const getUser = async (userId : User["id"]) => {

    return prisma.user.findUnique({
        where : {id : userId},
        include : {
            _count : {
                select : {
                    events  : true,
                    questions : true,
                    participations : true,
                    bookMarks :true
                }
            }
        }
    })

}