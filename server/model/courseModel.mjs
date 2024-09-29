import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  courseType: {
    type: String,
    required: true,
    enum: ['YogaCourse', 'MeditationCourse']  
  },
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cardImage: {
    type: String,
    required: true
  },
   content1: {
      heading:{
          type:String,
          required:true
      },
      image:{
          type:String,
          required:true
      },
      Description:{
          type:String,
          required:true
      }
  },
  content2: {
      heading:{
          type:String,
          required:true
      },
      image:{
          type:String,
          required:true
      },
      Description:{
          type:String,
          required:true
      }
  },
  content3: {
      heading:{
          type:String,
          required:true
      },
      image:{
          type:String,
          required:true
      },
      Description:{
          type:String,
          required:true
      }
  },
  content4: {
      heading:{
          type:String,
          required:true
      },
      image:{
          type:String,
          required:true
      },
      Description:{
          type:String,
          required:true
      }
  }
}, { timestamps: true });

export const CourseModel = mongoose.model("Course", courseSchema);
