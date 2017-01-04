var express = require("express")
var router = express.Router()

router.get('/getMovies',function(req,res,next){

  res.json({
    confirmation : 'success',
    data : {'movies':[]}
  })
})

router.get('/:resource',function(req,res,next){
  var resource = req.params.resource
  res.json({
    confirmation : 'success',
    resource:resource
  })
})



module.exports = router
