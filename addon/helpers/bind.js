import Ember from "ember";

const { run } = Ember;

export function bind(params, { target }) {
  return run.bind(target, ...params);
}

export default Ember.Helper.helper(bind);
