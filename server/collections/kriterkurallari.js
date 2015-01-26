/*
 * Add query methods like this:
 *  Kriterkurallari.findPublic = function () {
 *    return Kriterkurallari.find({is_public: true});
 *  }
 */

Kriterkurallari.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

Kriterkurallari.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
