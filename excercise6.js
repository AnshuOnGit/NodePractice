function doAsIsay(dir_path, extension,callback){
  var fr = require('fs')
  fr.readdir(dir_path,function(err,file_list)
   {
     if(err)
      return callback(err,file_list,extension)
      var path = require('path')
      var new_list_of_files = []
      file_list.forEach(function(file,index)
       {
         if(path.extname(file) == '.' + extension)
           new_list_of_files.push(file)
       })
      return callback(null,new_list_of_files,extension)
   }
  )
}

module.exports = doAsIsay
