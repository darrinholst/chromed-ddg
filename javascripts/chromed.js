(function() {
  var googleIt = function() {
        var q = $('input[name=q]');
        q.val('!g ' + q.val());
        q.parents('form').submit();
      },

      initialize = function() {
        $(document).bind('keydown', 'ctrl+g', googleIt);
      };

  initialize();
})();
