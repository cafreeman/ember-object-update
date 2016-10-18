# ember-object-update

Ever get tired of dealing with `Ember.get` and `Ember.set` when you're trying to update properties on an object, or component?

Does this look familiar?

```js
Ember.set(obj, 'name', Ember.get(obj, 'name').capitalize())
```

Or this?

```js
actions: {
  doubleAllValues() {
    let oldValue = Ember.get(this, 'someArray');
    let newValue = oldValue.map(v => v * 2)
    Ember.set(this, 'someArray', newValue)
  }
}
```

If you find yourself wishing there was an easier way to make these kinds of updates, then `ember-object-update` is for you!

`ember-object-update` is a simple add-on that (currently) provides a single utility function: `update`. The `update` function lets you use a function to compute a new value for a property *and* update the property all with one function.

`update` accepts three arguments:
  - *obj*: The object you want to update
  - *path*: A string that contains the path to the value you want to update, e.g. `names.nickname`
  - *updateFn*: A function whose first argument is the **current** value of the property you're updating, and whose result is the **new** value you'd like to set.

### Examples

This'll probably be easier if you see it in action, so check out the examples below:

### Doubling all the values in an array property
```js
let obj = Ember.Object.create({
    a: [1, 2, 3]
  });
});

// The old way
Ember.set(obj, 'a', Ember.get(obj, 'a').map(v => v * 2)); // [2, 4, 6]

// Using the `update` method
update(obj, 'a', a => a.map(v => v * 2));
```

Also, it works in components!

### Updating component properties from an action
```js
export default Ember.Component.extend({
  layout,

  numClicks: 0,

  actions: {
    increment() {
      update(this, 'numClicks', v => v + 1)
    },

    decrement() {
      update(this, 'numClicks', v => v - 1)
    }
  }
});
```

### Crazy nested things (plus array indexes!)
```js
let crazyNestedPOJO = {
  a: {
    b: [
      {
        c: "some deeply nested value"
      }
    ]
  }
};

update(crazyNestedPOJO, 'a.b.0.c', oldValue => oldValue.toUpperCase());
```

### Closing over local variables in your updater function
```js
actions: {
  multiply(multiplier) {
    // close over the `multiplier` value when pass our updater function into `update`
    update(this, 'collection', collection => collection.map(v => v * multiplier));
  }
}
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-object-update`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
