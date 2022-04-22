import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    res.status(500).json(err)
  })
}

const show = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
    .populate("friends")
    return res.status(200).json(profile)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const updateProfile =  async (req,res) =>{
  try{
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile, 
      req.body,
      { new:true }
)
    return res.status(200).json(profile)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const createTodo = async (req, res) => {
  try {
    req.body.created_by = req.user.profile
    const profile = await Profile.findById(req.user.profile)
    profile.todos.push(req.body)
    await profile.save()
    const newtodo = profile.todos[profile.todos.length - 1]

    return res.status(201).json(newtodo)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteTodo = async (req, res) => {
  try {
    const profile = await Profile.findById(req.user.profile)
    profile.todos.remove({ _id: req.params.todoId })

    await profile.save()
    return res.status(204).end()
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const updatedProfile = await Profile.findById(req.user.profile)
      .populate('todos.created_by')

    const idx = updatedProfile.todos.findIndex(
      (todo) => todo._id.equals(req.params.todoId)
    )
    updatedProfile.todos[idx].completed === false ? 
    updatedProfile.todos[idx].completed = true : 
    updatedProfile.todos[idx].completed=false

    await updatedProfile.save()
    return res.status(200).json(updatedProfile)

  } catch (err) {
    res.status(500).json(err)
  }
}

const addFriend = async (req, res) => {
  try{
    const myProfile = await Profile.findById(req.user.profile)
    const profile = await Profile.findById(req.params.id)
    myProfile.friends.push(profile)
    await myProfile.save()
    return res.status(200).json(myProfile)

  }catch(err) {
    res.status(500).json(err)
  }
}


const unaddFriend = async (req, res) => {
  try{
    const myProfile = await Profile.findById(req.user.profile)
    let updatedFriends = myProfile.friends.filter(f => `${f}`.includes(req.params.id)=== false)
    myProfile.friends = updatedFriends
    await myProfile.save()
    return res.status(200).json(myProfile)

  }catch(err) {
    res.status(500).json(err)
  }
}



export { 
  index,
  createTodo as create,
  show,
  update,
  deleteTodo as delete,
  addFriend,
  updateProfile,
  unaddFriend
}
