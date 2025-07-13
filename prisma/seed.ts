import { PrismaClient } from "../src/generated/prisma";
import { faker } from "@faker-js/faker";
import colors from 'tailwindcss/colors'
import cuid from 'cuid'


const prisma = new PrismaClient();

const myUserId = "kp_56d1cc3bc93e404eb59881d15aab5d3c"

const seed = async () => {

    await resetDb();

    process.stdout.write("generating users");

    const myUser = await prisma.user.create({
        data : {
            id : myUserId,
            email : "idthj@mechanicspedia.com",
            color : colors.red['500'],
            displayName : "kaido"
        }
    });

    const otherUsers = await prisma.user.createManyAndReturn({
        data : Array.from({length : 10}).map(() => ({
            id : cuid(),
            email : faker.internet.email(),
            displayName : faker.internet.displayName(),
            createdAt : faker.date.recent(),
            color : faker.helpers.arrayElement([
                colors.green[500],
                colors.red[500],
                colors.purple[500]
            ])
        }))
    });

    process.stdout.write("users generated \n");


    process.stdout.write("generateing events");

    const event = await prisma.event.create({
        data : {
            ownerId : myUser.id,
            displayName : faker.internet.displayName(),
            slug : faker.lorem.slug(),
            createdAt : faker.date.recent(),
            participants : {
                createMany : {
                    data : Array.from({length : 10}).map((_,index) => ({
                        userId : otherUsers[index % otherUsers.length].id
                    }))
                }
            }
        }
    })

    process.stdout.write("events generated\n");

    process.stdout.write("generateing questions");

    for (let i = 0;i < 30;i++) {

        await prisma.question.create({
            data : {
                eventId : event.id,
                userId : otherUsers[i % otherUsers.length].id,
                body : faker.lorem.paragraph(),
                isPinned : faker.datatype.boolean({probability : 0.2}),
                isResolved : faker.datatype.boolean({probability : 0.2}),
                createdAt : faker.date.recent(),
                upvotes : {
                    createMany : {
                        data : Array.from({
                            length : faker.number.int({min : 0,max : 8})
                        }).map((_,index) => ({
                            authorId : otherUsers[index % otherUsers.length].id
                        }))
                    }
                }
            }
        })

    }

    process.stdout.write("questions generated \n");

    process.stdout.write("generating polls");
    
    const polls = await prisma.poll.createManyAndReturn({
        data : [
            {
                eventId : event.id,
                body : faker.lorem.paragraph(),
                createdAt : faker.date.recent(),
                isLive : true
            },
            {
                eventId : event.id,
                body : faker.lorem.paragraph(),
                createdAt : faker.date.recent(),
                isLive : true
            }
        ]
    })

    const optionVotes = [
        otherUsers.slice(0,4).map((usr) => usr.id),
        otherUsers.slice(4,6).map((usr) => usr.id),
        otherUsers.slice(6,10).map(usr => usr.id),
        []
    ];

    for (const poll of polls) {

        for (let i = 0;i < 4;i++) {
            
            await prisma.pollOption.create({
                data : {
                    pollId : poll.id,
                    body : faker.lorem.word(3),
                    index : i,
                    votes : {
                        createMany : {
                            data : Array.from({length : optionVotes[i].length}).map((_,idx) => ({
                                authorId : optionVotes[i][idx],
                                pollId : poll.id
                            }))
                        }
                    }
                }
            })

        }

    }
    
    process.stdout.write("generated polls\n");

    console.log("seeding completed")
}

const resetDb = async () => {

    process.stdout.write("Resetting database...");

    await prisma.event.deleteMany();
    await prisma.poll.deleteMany();
    await prisma.question.deleteMany();
    await prisma.user.deleteMany();

    process.stdout.write("done");

}

seed().catch(async (err) => {

    console.log(err);
    process.exit(1);

}).finally(() => async () => await prisma.$disconnect());