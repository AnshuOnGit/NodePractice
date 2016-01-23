function doAsIsay(dir_path, extension,callback){
  var fr = require('fs')
  fr.readdir(dir_path,function(err,file_list)
   {
     if(err)
      return callback(err,file_list)
      var path = require('path')
      var new_list_of_files = file_list.filter(function(file){
        return path.extname(file) == '.' + extension
      })
      return callback(null,new_list_of_files)
   }
  )
}

module.exports = doAsIsay
