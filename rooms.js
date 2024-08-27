const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
        name: String,
        price: {
            type: Number,
            required: [true, '此欄位必填']
        },
        rating: Number,
        createdAt:{
            type: Date,
            default: Date.now,
            select: false //不要在前台顯示
        }
        
    },
    {
        versionKey: false ,    //不要__v欄位
        // timestamps: true,       //自動產生createdAt, updatedAt欄位
        // collection: 'room'    //指定collection名稱
    }
);




const Room = mongoose.model('Room', roomSchema);

module.exports = Room;