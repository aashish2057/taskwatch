import prisma from '.';
import { Task } from './types'

export async function getDate(date: Date) {
    try {
        const day = await prisma.calendar.findUnique({ where: { date }, include: {taskList: true}})
        return { day }
    } catch (error) {
        return {error}
    }
}

export async function addTask(Task: any) {
    try {
        const task = await prisma.tasks.create({data: Task})
        return { task }
    } catch (error) {
        return {error}
    }
}