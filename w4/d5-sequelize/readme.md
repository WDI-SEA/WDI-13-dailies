# sequelize CRUD documentation

[CRUD documentation](http://docs.sequelizejs.com/en/latest/api/model/)

This page will tell you all the functions available on `db.<table name>`.

see `findOrCreate`. The documentation shows:

```
findOrCreate(options) -> Promise.<Instance, created>
```

findOrCreate takes one parameter, and returns a promise. the `<Instance, created>` denotes that the `then` on the promise will contain two pieces of data; the Instance, and a boolean saying if something was created (or just read).

The documenation for this method suggests you use `spread()` instead of `then()`. This allows you to use `Instance` and `created` as two seperate parameters.

```
db.product.findOrCreate({
  name: 'Soda',
  price: 100
}).then(function(data) {
  var instance = data[0];
  var wasCreated = data[1];

  // ...
});
```

vs

```
db.product.findOrCreate({
  name: 'Soda',
  price: 100
}).spread(function(instance, wasCreated) {
  // ...
});
```

## migrations

[Migrations documentation](http://docs.sequelizejs.com/en/latest/docs/migrations/)


`sequelize migration:create --name describeMigration`

* ex: `sequelize migration:create --name addPriceToProduct`


```
module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
  }
}
```

## validations

[Validations documentation](http://docs.sequelizejs.com/en/2.0/docs/models-definition/#validations)


Validations go on the model `models/<model>.js`.

Here, we have these validations on the `game` model:

1. `name` must be a string between 3 and 100 characters
2. `description` must be a string between 3 and 100 characters
3. `numberOfPlayers1 must be an integer between 0 and 100000

```javascript
'use strict';
module.exports = function(sequelize, DataTypes) {
    var game = sequelize.define('game', {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 100]
            }
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 100]
            }
        },
        numberOfPlayers: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 100000
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return game;
};
```
