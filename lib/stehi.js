function isInt(data)
{
  if (data === parseInt(data, 10))
    return true
  else
    return false
}


this.generatePoem = function()
{
  var vocabular=require('../config/dict.json');
  var randomValues = [];

  for (i = 0; i < vocabular.length; i++) {
      randomValues.push(vocabular[i][Math.floor(Math.random() * vocabular[i].length)]);
  }

  var structure = require('../config/structure.json');
  var poem = [];

  for (i=0; i< structure.length; i++)
  {
    var element="";
    for (j=0;j<structure[i].length; j++)
    {
         if (isInt(structure[i][j]))
         {

            element = element + randomValues[structure[i][j]] + " ";;
         }
         else {
            element = element + structure[i][j] + " ";
         }
    }
    poem.push(element.replace(/\s+$/, '')); //trimming last space
  }


  return poem;
}
