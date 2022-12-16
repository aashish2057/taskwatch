import prisma from '.';


export async function getDate(date: Date) {
    try {
        const day = await prisma.calendar.findUnique({ where: { date }, include: {taskList: true}})
        return { day }
    } catch (error) {
        return {error}
    }
}

    
export async function getFiveDays(date: Date) {
    let five = new Date(date)
    five = new Date(five.setDate(date.getDate() + 5))
    console.log(five)
    try {
        const day = await prisma.calendar.findMany({ 
            where:  {
                date: {
                    gt: date,
                    lte: five
                }
            },
        include: {taskList: true}})
        return { day }
    } catch (error) {
        return {error}
    }
}

