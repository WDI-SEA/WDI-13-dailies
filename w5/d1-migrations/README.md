# Migrations

[Migrations documentation](http://docs.sequelizejs.com/en/latest/docs/migrations/)

Databases change over the lifetime of a project. Each migrations file marks a new version of the database.

For example:

We create a website of local ice cream places. We launch the website, input a bunch of local ice cream parlors, and our website is fine for a week.

The original database looks like this, with one table:

icecream_places
  - name:string
  - owner:string
  - priceForScoop:string

Our website is very basic. It just displays an index of all the ice cream places in our database.

![](Oneweeklater.jpg)

A week later, we think to add a new feature. We want to sort our ice cream places by the price for a scoop. We realize, that we made a mistake in the original table schema. priceForScoop should have been a number, not a string. Because it is not the right datatype, sorting by that column doesn't work as expected.

We must make a database migration to fix this mistake.

## Why make migration files?

Why bother making a new migration file, instead of just updating the original migration file and fixing the datatype there?

Because we have already released our application, we have a live production database. We don't want to lose any data in there! Just changing the original migration file won't let use easily fix the production database.

Running `sequelize db:migrate` will run all the migration files that haven't been processed yet. When we update the production server, we would run the new migrations, and this will fix our existing database.
