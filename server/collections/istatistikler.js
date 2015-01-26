/*
 * Add query methods like this:
 *  Istatistikler.findPublic = function () {
 *    return Istatistikler.find({is_public: true});
 *  }
 */

Istatistikler.allow({
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

Istatistikler.deny({
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
