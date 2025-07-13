import routes from "@/app/config/routes";
import { getUser } from "@/lib/server/getUser";
import { onlyDateFormatter } from "@/lib/utils/date-utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


const AccountPage = async () => {

    const kindeUser = await getKindeServerSession().getUser();

    if (!kindeUser || !kindeUser.id) {

        throw new Error("Invalid user!");

    }

    const user = await getUser(kindeUser.id);

    if (!user) {
        redirect(routes.login);
    }

    return (
        <div className="w-full h-full flex flex-col items-center mt-32">

            <h1 className="text-2xl font-bold mt-3 ">{user.displayName}</h1>
            
            <time className="text-xs text-gray-500"suppressHydrationWarning>
                Member since {onlyDateFormatter.format(user.createdAt)}
            </time>

            <ul className="text-sm text-muted-foreground mt-6 space-y-1">
                <li>Events : {user._count.events}</li>
                <li>Questions asked : {user._count.questions}</li>
                <li>Participating : {user._count.participations}</li>
                <li>Bookmarked Events : {user._count.bookMarks}</li>
            </ul>
            
        </div>
    )
}

export default AccountPage;