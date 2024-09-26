import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

// const storage = multer.memoryStorage()

export const upload = multer({ 
    storage: storage,
    limits: {
      fieldSize: 10 * 1024 * 1024 // Set the limit to 10MB, for example
    }
  });