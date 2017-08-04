import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("bind", "helper:bind", {
  integration: true
});

// Replace this with your real tests.
test("it renders one", function(assert) {
  assert.expect(2);

  this.set("name", "Bob");
  this.set("fn", function(x, y) {
    assert.equal(this.get("name"), "Bob");
    assert.deepEqual([x, y], [1, 2]);
  });

  this.render(hbs`<button onclick={{bind fn 1 2}}></button>`);
  this._element.querySelector("button").click();
});

test("it renders two", function(assert) {
  assert.expect(2);

  this.set("foo", {
    bar: {
      name: "Bob",
      fn(x, y) {
        assert.equal(this.name, "Bob");
        assert.deepEqual([x, y], [1, 2]);
      }
    }
  });

  this.render(hbs`<button onclick={{bind foo.bar.fn 1 2}}></button>`);
  this._element.querySelector("button").click();
});
