  insert into recipes values
  ('47cc1f55-e367-4860-a620-f3306234c556','Cauliflower do123s'    ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/716426-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('2e602547-0b18-4768-bd91-d178d04b5fc5','Cauliflower d444os'    ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/715594-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('715007a8-fa91-44d2-b719-47ae5a2999b7','Cauliflower do55s'     ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/715497-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('56685c8a-2a84-4fe8-8e33-8d206559b98e','Cauliflower dosss'     ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/644387-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('bdfc91b5-6f2c-4a1f-bcc3-c1f1a22b611d','Cauliflower do123s'    ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/716268-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('19ca22dd-34e7-4e62-ae1f-694c648b8a04','Cauliflower do1111s'   ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/716268-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('210ea261-4b31-4e19-bd0d-11262f6d54c9','Cauliflower dos111111' ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/716268-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('19ca22dd-14e7-4e62-ae1f-694c648b8a04','pizza roll'            ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/716381-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('210ea261-3b31-4e12-bd0d-11262f6d54c9','pizza'                 ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/716381-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('19ca21dd-14e7-4e62-ae1f-694c648b8a04','pizza roll 2'          ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/716381-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
  ('210ea221-3b31-4e12-bd0d-11262f6d54c9','pizza3 '               ,'muy buena', 3,3,'https://spoonacular.com/recipeImages/716381-312x231.jpg','si','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03');

   Diet.destroy({
    where: {},
  })
  Diet.create({            // estas tienen que estar definidas
    name: 'vegetarian'
  });
  Diet.create({            // estas tienen que estar definidas
    name: 'lacto-vegetarian'
  });
  Diet.create({            // estas tienen que estar definidas
    name: 'Ovo-vegetarian'
  });
  Diet.create({            // estas tienen que estar definidas
    name: 'Vegan'
  });  
    Diet.create({            // estas tienen que estar definidas
    name: 'Pescetarian'
  });  
    Diet.create({            // estas tienen que estar definidas
    name: 'paleolithic'
  });  
      Diet.create({            // estas tienen que estar definidas
    name: 'Primal'
  });  
      Diet.create({            // estas tienen que estar definidas
    name: 'Whole30'
  });  

  insert into recipe_diet  ("recipeId","dietName","createdAt", "updatedAt") values
 ('47cc1f55-e367-4860-a620-f3306234c556','vegetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('47cc1f55-e367-4860-a620-f3306234c556','pescetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('47cc1f55-e367-4860-a620-f3306234c556', 'paleolithic','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('2e602547-0b18-4768-bd91-d178d04b5fc5','vegetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('2e602547-0b18-4768-bd91-d178d04b5fc5','pescetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('2e602547-0b18-4768-bd91-d178d04b5fc5','paleolithic' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('715007a8-fa91-44d2-b719-47ae5a2999b7','vegetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('715007a8-fa91-44d2-b719-47ae5a2999b7','pescetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('715007a8-fa91-44d2-b719-47ae5a2999b7','paleolithic' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('715007a8-fa91-44d2-b719-47ae5a2999b7','whole30' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('56685c8a-2a84-4fe8-8e33-8d206559b98e','vegetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('bdfc91b5-6f2c-4a1f-bcc3-c1f1a22b611d','vegetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('19ca22dd-34e7-4e62-ae1f-694c648b8a04','vegetarian' ,'2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03'),
 ('210ea261-4b31-4e19-bd0d-11262f6d54c9', 'vegetarian','2021-07-09 09:25:30.002-03','2021-07-09 09:25:30.002-03');
 






