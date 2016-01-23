var quad = require('./quadratic')
var prompt = require('prompt')

prompt.get(['a','b','c'],function(err,result){
  console.log('command line input received:');
  console.log('a ='+result.a);
  console.log('b ='+result.b);
  console.log('c ='+result.c);

  quad(result.a,result.b,result.c,function(err,quadsolve){
    if(err)
    console.log('Error: '+ err);
    else {
      console.log('Roots are '+ quadsolve.root1() + 'and '+ quadsolve.root2());
    }
  });
});
