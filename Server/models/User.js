const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        userName:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        phone:{type:Number,required:true,
        img:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA8CAYAAAAgwDn8AAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEQ0lEQVRoQ+2ZT2xMQRzHv/P6x1J70NDq3lQ4VF2EA0JFhUMPHBDBgatIHBy4KOrCgTi5ciAhHJD0IiraBImIiz8Hom5dLanDlq603We+s7PVrrdv387Mq23ik2zem+mbX+b75jfz+/1ehS+BY977GaTxC4P+D6T9rOprEQm0iga0YAHaRFL1ucCpgDSyuDc1pCYfBkXsrUnJa0L3mONMwOPcVzzxv+lWNDq9ZegUS3XLDE9frTCZPOmT4575o7plhrUAuo3J5Av05oaVDVOsBdyVPm8L940pVgJ42nwps2GjwE1PWyZYCRjSR6QLTG1ZCfjs/9R39pjaslsBi81XjOlGtt7ErjANRlYCUg4iaQFTW1YCVohF+s4eU1t2KyATNFeY2rISwKxyuUzMbKEN0wzVehPvk1mlLTY2rAUwJd5ukVF2ec1WabW1ALJDpsUmIjj5zaJRt8xwXtAwuSuXH9Hn6TZVVdDMhIkZcxumB4VozXOeRyVPm3hLyqfv4A+8Bz7IFPdDGljdIn8piK1twLY1+qHq4Y+AzDj8nrtAv5x8KTraILr3AcmFuuPfkxfAye++BIxFSKgWJyAenKoaEeoU8s/LNx9l8kQ+p1aqSvDo86DPVwLdjOOqAJE7d8dH72vdrICudRBn9+tGecbHgE9vgLcvfHwfzt8XWLkWWNIMtG8U6n7hYv2HCIjcwas+PsrTplLk6SRuntCNcAbuA49u+cj+0B0hJBqAXYcEtuzRHWUQuQ2njOOAeHlR3wUzKt/0jQs+hgZ1RwWkWoEjZwQa5cqE4WGVPOdNKDNu6BNw5bjZ5AnHqfHSThieClQmhIzjm792OprLhMHxtEN7pfBEh1l0DRt3vcd+8gVoh25YCk+lB0wTKiEkreCGTX/WDUfQnWg3CBXIxFmZHjREzAzlc+r5AHhU8rSJA9ql/WLy9YBMC8RDmR6UWwn5d/VciTSCZ7sr1ymGdmfGjgLB2Wi/jLLMRBkfeNrwzKfPl8lGb1/28apPN2JgfSdw4KTQrTx/C7DgmgwpgwFvyRWtMkofuzRbgJOSskCckydBMcWpgLgJ2l/zSkAi4OOdUwH00ThJrdQ3M3AqoLFJ38REkH2nAto3zT4hXBNk36kAFiNBfuoC2qX9YpwKYCW183A8q0C7QZWaUwFkq6ykWlbohiNoj3aDcC6AHO0WzlyJdmivFLEIYBnIkG8rguNpJ6ysdJoLFcNKisWNSX1At+GbL1cTxyqggPoqcVNWaRH+Fcy3zg1byueLmRMBZPq70HNZ447ki34K4oQZYRmkeM5X/F1orgTERSybeC75L+BfM+8FRN7EU1NT6jcxMYFcLofJyUl1JbyyvxR1dXXwvPy74rW2tlZd2V9TU6N+poQK4IQzmQyy2ez0ZOOAYhKJBJLJZMViQgWMjIyoNz1XcGWamiqriqpiBTjx+vp69yswk+rcA8BvV0/EXtgHg5cAAAAASUVORK5CYII="},
        validate:{
            validator:v=>v.toString().length===10,
            message:'phone must be 10 digit number'
        }
        },
},{
    timestamps:true
})

module.exports=mongoose.model('User',userSchema)