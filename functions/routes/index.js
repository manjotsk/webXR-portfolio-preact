var express = require('express');
var router = express.Router();
var path = require('path')
/* GET home page. */
router.get('/:filename', function (req, res, next) {
  try {
    res.sendFile(req.params.filename, { root: './assets/WoodenCabinBlend/' })

  } catch (error) {
    console.log(error);

  }
});
// router.get('/WoodenCabinObj.mtl', function (req, res, next) {
//   res.sendFile('WoodenCabinObj.mtl', { root: './assets/WoodenCabinBlend/' })
// });

module.exports = router;
