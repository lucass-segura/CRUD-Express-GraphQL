import User from "./models/User.js";

const resolvers = {
  Query: {
    hello: () => 'Hello Pepe!',
    getAllUsers: async () => {
      const users= await User.find()
      return users
    },
    async getUser(_, {id}) {
      const user = await User.findById(id)
      return user
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      const {name, email, password} = args.user
      const newUser = new User({name, email, password})
      await newUser.save()
      return newUser
    },
    deleteUser: async (_, {id}) => {
      await User.findByIdAndDelete(id)
      return "User deleted"
    },
    updateUser: async (_, {id, user}) => {
      const userUpdate = await User.findByIdAndUpdate(id,{
        $set: user
      }, {new: true})
      return userUpdate
    }
  }
};

export default resolvers