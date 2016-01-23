var disc = require('./discriminant')

function calculateRootsofQuadraticEqn(a,b,c,callback)
{
  if(a == 0)
  {
    callback(new Error('a should not be zero'));
    return;
  }
  else if (disc(a,b,c) < 0) {
    callback(new Error('discriminant is less than zero, no real roots'));
    return;
  }
  else{
    callback(null ,
            {root1:function(){
              return (-b - Math.sqrt(disc(a,b,c)))/(2*a);
            },
            root2:function(){
              return (-b + Math.sqrt(disc(a,b,c)))/(2*a);
            }}
          );
  }

}

module.exports = calculateRootsofQuadraticEqn;
