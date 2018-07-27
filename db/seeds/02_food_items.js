
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_items').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('food_items').insert({id: 1, name: 'Margherita Pizza', description: 'House tomato sauce, salted mozzarella, chiffonade basil', price: 14.00, prep_time: 15, classification: 'Main'}),
        knex('food_items').insert({id: 2, name: 'Fish + Chips', description: 'Crispy beer battered Icelandic cod', price: 16.00, prep_time: 20, classification: 'Main', picture: 'https://earls-public.storage.googleapis.com/content/menu_items/images/000/000/696/original/FishChips_DSC_8675.jpg'}),
        knex('food_items').insert({id: 3, name: 'Oven Roasted Salmon', description: 'Blackened salmon with confit garlic butter, jasmine rice and seasonal vegetables', price: 20.00, prep_time: 30, classification: 'Main',}),
        knex('food_items').insert({id: 4, name: 'Bacon Cheddar Burger', description: 'Cured bacon, tomatoes, onion, lettuce, pickles, mayonnaise and mustard, on a freshly baked brioche bun', price: 15.25, prep_time: 15, classification: 'Main'}),
        knex('food_items').insert({id: 5, name: 'Cajun Chicken Cheddar Sandwich', description: 'Aged cheddar, lettuce, tomatoes, on rustic ciabatta', price: 16.00, prep_time: 15, classification: 'Main'}),
        knex('food_items').insert({id: 6, name: 'Southwest Vegetarian Burger', description: 'Brown rice and mushroom vegetarian patty, guacamole, crispy tortilla, black beans, aged cheddar, tomatoes, on a freshly baked brioche bun', price: 16.00, prep_time: 15, classification: 'Main'}),
        knex('food_items').insert({id: 7, name: 'Roasted Chicken Quesadilla', description: 'Melted white cheddar, mushrooms, poblano peppers, slow cooked achiote chicken', price: 14.75, prep_time: 20, classification: 'Main'}),
        knex('food_items').insert({id: 8, name: 'Caesar Salad', description: 'Crisp romaine, croutons, parmesan, creamy caesar dressing', price: 9.00, prep_time: 10, classification: 'Soup_Salad', picture: 'https://earls-public.storage.googleapis.com/content/menu_items/images/000/000/115/original/caesar-salad-pinterest.jpg'}),
        knex('food_items').insert({id: 9, name: 'Clam Chowder', description: 'New England style, with full cream, chopped tomatoes, parsley, a hint of smoky bacon', price: 11.00, prep_time: 10, classification: 'Soup_Salad', picture: 'https://earls-public.storage.googleapis.com/content/menu_items/images/000/000/117/original/137.jpg'}),
        knex('food_items').insert({id: 10, name: 'Field Greens Salad', description: 'Grape tomatoes, cucumber, feta, toasted pumpkin seeds, champagne shallot vinaigrette', price: 9.00, prep_time: 10, classification: 'Soup_Salad'}),
        knex('food_items').insert({id: 11, name: 'Santa Fe Chicken Salad', description: 'Blackened chicken, feta, avocado, black beans, corn, dates, peanut lime vinaigrette', price: 18.25, prep_time: 25, classification: 'Soup_Salad', picture: 'https://earls-public.storage.googleapis.com/content/menu_items/images/000/000/128/original/153.jpg'}),
        knex('food_items').insert({id: 12, name: 'Tomato Bisque', description: 'Rich and zesty tomato soup with cream, sherry, basil and garlic', price: 6.00, prep_time: 10, classification: 'Soup_Salad'}),
        knex('food_items').insert({id: 13, name: 'Poutine', description: 'Crispy fries with cheese curds and housemade gravy', price: 9.00, prep_time: 15, classification: 'Side', picture: 'https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1.jpg'}),
        knex('food_items').insert({id: 14, name: 'Yam Fries', description: 'With garlic aioli', price: 7.50, prep_time: 15, classification: 'Side'}),
        knex('food_items').insert({id: 15, name: 'Side Caesar', description: 'Crisp romaine, croutons, parmesan, creamy caesar dressing', price: 5.00, prep_time: 10, classification: 'Side'}),
        knex('food_items').insert({id: 16, name: 'Side House Salad', description: 'Crisp greens, tomatoes, mozzarella, creamy ranch dressing', price: 5.25, prep_time: 10, classification: 'Side'}),
        knex('food_items').insert({id: 17, name: 'Side Soup of the Day', description: 'Featured soup, changes daily', price: 5.00, prep_time: 10, classification: 'Side'}),
        knex('food_items').insert({id: 18, name: 'NYC Cheesecake', description: 'Classic NYC-style cheesecake, graham cracker crust, seasonal compote', price: 8.75, prep_time: 10, classification: 'Dessert'}),
        knex('food_items').insert({id: 19, name: 'Sticky Toffee Chocolate Pudding', description: 'Warm pudding cake, chocolate and toffee sauces, with vanilla ice cream, candy snap', price: 8.75, prep_time: 15, classification: 'Dessert', picture: 'https://earls-public.storage.googleapis.com/content/menu_items/images/000/000/027/original/27.jpg'})
      ]);
    });
};
