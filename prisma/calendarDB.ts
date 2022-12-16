import prisma from '.';


export async function getDate(date: Date) {
    try {
        const day = await prisma.calendar.findUnique({ where: { date }, include: {taskList: true}})
        return { day }
    } catch (error) {
        return {error}
    }
}

