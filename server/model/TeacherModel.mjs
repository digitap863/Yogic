import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema({
  TeacherType: {
    type: String,
    required: true,
    enum: ['YogaTeacher', 'MeditationTeacher'] ,
  },
  Name: {
    type: String,
    required: true
  },
  Image: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const TeacherModel = mongoose.model("Teacher", TeacherSchema);
