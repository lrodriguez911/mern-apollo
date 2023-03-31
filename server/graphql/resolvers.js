import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
    projects: async () => await Project.find(),
    project: async (_, { _id }) => await Project.findById(_id),
    tasks: async () => await Task.find(),
    task: async (_, { _id }) => await Task.findById(_id),
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({ name, description });
      const savedProject = await project.save();
      return savedProject;
    },
    deleteProject: async (_, { _id }) => {
      const deletedProject = await Project.findByIdAndDelete({ _id: _id });
      if (!deletedProject) throw new Error("Project not found");
      await Task.deleteMany({projectId: deletedProject._id})
      return deletedProject;
    },
    updateProject: async (_, {_id, args})=>{
        const updatedProject = await Project.findByIdAndUpdate(_id, args, {
            new : true
        })
        if(!updatedProject) throw new Error("Task not found or can not be updated");
        return updatedProject;
    },
    createTask: async (_, { title, projectId }) => {
      const projectFound = await Project.findById(projectId);
      if (!projectFound) throw new Error("Project not found");
      const task = new Task({ title, projectId });
      const taskSaved = await task.save();
      return taskSaved;
    },
    deleteTask: async (_, { _id }) => {
      const deletedTask = await Task.findByIdAndDelete({ _id: _id });
      if (!deletedTask) throw new Error("Task not found");
      return deletedTask;
    },
    updateTask: async (_, {_id, args}) => {
        const updatedTask = await Task.findByIdAndUpdate(_id, args, {
            new: true
        })
        if(!updatedTask) throw new Error("Task not found");
        return updatedTask;
    }
  },
  Project: {
    tasks: async (parent) => await Task.find({projectId: parent._id})
  },
  Task: {
    project: async (parent) => await Project.findById(parent.projectId)
  }
};
