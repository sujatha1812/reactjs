 # sign of product to the given numbers

var x=1;
var y=2;
var z=-7;
if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }

#iterates from 1 to 100 multiples of 3 and 5

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " bestenlistreact" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " bestenlist" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " react" );
  }
  else
  {
    console.log(i);
  }
}