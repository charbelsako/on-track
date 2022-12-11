import mongoose, { Schema } from 'mongoose'

interface IClient {
  name: string
  phoneNumber: string[]
  email: string[]
  warnings: Schema.Types.ObjectId[]
}

const ClientSchema = new Schema<IClient>({
  name: {
    type: String,
    required: [true, 'Client name is required'],
  },
  phoneNumber: [
    {
      type: String,
      required: [true, 'At least one phone number is required'],
    },
  ],
  email: [{ type: String, required: ['An email is required', true] }],
  warnings: [{ type: Schema.Types.ObjectId }],
})

const Client = mongoose.model<IClient>('client', ClientSchema)
export default Client
