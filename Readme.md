## Simple Server connect MongoDB
使用Render來部屬

## Usage
```
Goto | https://mongooserender.onrender.com/rooms
```

> [!IMPORTANT]
>Free plan server on need 50s +

## Feature
```
Basic C U R D
```

>[!Warning]
>The post request must contain the following information
```
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
```
