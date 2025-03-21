var Linked = function (carousel) {
    this._core = carousel;
    this._handlers = {
      'dragged.owl.carousel changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.linked) {
          this.update(e);
        }
      }, this),
      'linked.to.owl.carousel': $.proxy(function (e, index, speed, standard, propagate) {
        if (e.namespace && this._core.settings.linked) {
          this.toSlide(index, speed, propagate);
        }
      }, this) };


    // register event handlers
    this._core.$element.on(this._handlers);

    // set default options
    this._core.options = $.extend({}, Linked.Defaults, this._core.options);
  };
  Linked.Defaults = {
    linked: false 
  };

  Linked.prototype.update = function (e) {
    this.toSlide(e.relatedTarget.relative(e.item.index));
  };

  Linked.prototype.toSlide = function (index, speed, propagate) {
    var id = this._core.$element.attr('id'),
    linked = this._core.settings.linked.split(',');

    if (typeof propagate == 'undefined') {
      propagate = true;
    }

    index = index || 0;

    if (propagate) {
      $.each(linked, function (i, el) {
        $(el).trigger('linked.to.owl.carousel', [index, 300, true, false]);
      });
    } else {
      this._core.$element.trigger('to.owl.carousel', [index, 300, true]);

      if (this._core.settings.current) {
        this._core._plugins.current.switchTo(index);
      }
    }
  };

  Linked.prototype.destroy = function () {
    var handler, property;

    for (handler in this._handlers) {
      this.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.linked = Linked;