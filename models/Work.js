import { Schema, model, models } from "mongoose"

const WorkSchema = new Schema({
  cid: {
    type: String,
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
})

const Work = models.Work || model("Work", WorkSchema)
export default Work