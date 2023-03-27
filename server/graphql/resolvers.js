import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
    Query: {
        hello: () => "Hello World!",
        projects: async () => await Project.find(),
        tasks: async () => await Task.find()
    },
    Mutation: {
        createProject: async (_, {name, description}) =>{
            const project = new Project({name, description})
            const saveproject = await project.save()
            console.log(name, description);
            return saveproject;
        }
        createTask: async (_, {title, description}) =>{
            const project = new Project({name, description})
            const saveproject = await project.save()
            console.log(name, description);
            return saveproject;
        }
    }
}