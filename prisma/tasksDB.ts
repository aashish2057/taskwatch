import prisma from '.';
import { Task } from './types'

export async function addTask(Task: any) {
    try {
        const task = await prisma.tasks.create({data: Task})
        return { task }
    } catch (error) {
        return {error}
    }
}

export async function deleteTask(id: any) {
    try {
        const task = await prisma.tasks.delete({where: {id: id}})
        return { task }
    } catch (error) {
        return {error}
    }
}