import { prisma } from "@/lib/prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {faker} from '@faker-js/faker'
import colors from 'tailwindcss/colors';
import { NextResponse } from "next/server";
import routes, { baseUrl } from "@/app/config/routes";

export async function GET() {

    const {getUser} = getKindeServerSession();

    const user = await getUser();

    if (!user || !user.id) {
        throw new Error("something went wrong with the authentication: " + user);
    }


    //check if user exists in the database
    let dbUser = await prisma.user.findUnique({
        where : {id : user.id}
    });


    if (!dbUser) {

        dbUser = await prisma.user.create({
            data : {
                id : user.id,
                displayName : user.username ?? user.given_name ?? faker.internet.username(),
                email : user.email || "",
                color : colors.emerald['400']
            }
        })

    }

    return NextResponse.redirect(`${baseUrl}${routes.dashboard}`)

}