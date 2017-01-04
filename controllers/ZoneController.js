var Zone = require("../models/Zone")

module.exports = {
  find:function(params,callback){
    Zone.find(params,function(err,zones){
      if(err){
        return callback(err,null)
      }
      callback(null,zones)
    })

  },
  findById:function(){

  },
  create:function(){

  },
  update:function(){

  },
  destroy:function(){

  }

}
