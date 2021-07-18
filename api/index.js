//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn,Diet } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false}).then(() => {
  //Para asegurarn<<<<<sos de que esta la info cargada en la base de datos
  arr = ['vegetarian',
  'lacto vegetarian',
  'ovo vegetarian',
  'vegan',
  'pescetarian',
  'paleolithic',
  'primal',
  'whole30',
  'gluten free',
  'lacto ovo vegetarian',
  'dairy free'
]
  arr.forEach(element => Diet.findOrCreate({
    where: { name: element }}
  ));
  //11/07/2021
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
