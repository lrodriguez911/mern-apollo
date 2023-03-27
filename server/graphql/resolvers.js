import Project from "../models/Project.js";

export const resolvers = {
    Query: {
        hello: () => "Hello World!"
    },
    Mutation: {
        createProject: async (_, {name, description}) =>{
            const project = new Project({name, description})
            const saveproject = await project.save()
            console.log(name, description);
            return saveproject;
        }
    }
}