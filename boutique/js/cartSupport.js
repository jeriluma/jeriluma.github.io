/* 
    makeEventSource()

    This function will add very simple event support to any object you
    pass as the 'obj' parameter. This is known as a mix-in class,
    or as Crockford refers to it, a 'part' that can be added to
    any other object. The key is that you don't inherit from a
    class or object to get this functionality--this will add the
    functionality to any existing object.
*/

function makeEventSource(obj) {
    //private listeners variable to hold set of
    //callbacks, keyed on event name
    //this variable will remain private from other code
    //but the following functions will be able to see it
    var listeners = {};
    
    //on() method for registering a new listener
    obj.on = function(eventName, callback, context) {
        if (!listeners[eventName])
            listeners[eventName] = [];

        listeners[eventName].push({
            callback: callback,
            context: context
        });        
    } //on()

    //trigger() method for triggering an event
    obj.trigger = function(eventName, data) {
        var idx, listener;
        var evtListeners = listeners[eventName];

        if (evtListeners) {
            for (idx = 0; idx < evtListeners.length; ++idx) {
                listener = evtListeners[idx];
                if (listener.callback) {
                    listener.callback.call(listener.context, data);
                } //if there is a callback
            } //for each listener
        } //if listeners for eventName        
    } //trigger()

    //off() method for removing all listeners from an event
    obj.off = function(eventName) {
        delete listeners[eventName];
    }

    return obj;
} //makeEventSource()



/* apply()
    copies all properties from the source object
    to the target object (shallow copy)
    params:
    - source (object) object to copy from
    - target (object) object to copy to

    no return value
*/
function apply(source, target) {
    for (prop in source) {
        target[prop] = source[prop];
    }
} //apply()


function wrapSuper(superFn, context) {
    return function() {
        return superFn.apply(context, arguments);
    }    
}

/*
    TemplateView

    Simple template merge view object. This can merge
    a model with a given HTML template by matching model
    property names to element class names.
    
    Used as prototype by createTemplateView()
*/
var TemplateView = {
    render: function() {
        var propVal;        //current property value
        var targetElem;     //target element in cloned template
        var targetTagName;  //tag name of target element

        var clonedTemplate = this.template.clone();

        //iterrate over the properties of the model
        //and look for a descendant element with the
        //same style class name
        for (prop in this.model) {

            targetElem = clonedTemplate.find('.' + prop);
            if (targetElem.length > 0) {
                //get the property value
                propVal = this.model[prop];
                
                //get the tag name for the target element
                targetTagName = targetElem.prop('tagName').toLowerCase();

                if ('img' === targetTagName) {
                    targetElem.attr('src', this.model[prop]);
                }
                else if ('a' == targetTagName) {
                    targetElem.attr('href', this.model[prop]);
                }
                else {
                    targetElem.html(this.model[prop]);
                }
            }
        } //for each prop in model object

        //add cloned and populated template to container
        this.container.append(clonedTemplate);

        //call the afterRender method if there is one
        //(can be used by derived objects to add things or
        //register event handlers after the render is complete)
        if (this.afterRender)
            this.afterRender(clonedTemplate, this.model);

        return clonedTemplate;

    } //render()    
}; //TemplateView

/*  
    createTemplateView()

    Creates a simple single-object template view, which knows
    how to merge a single model object (POJO) with an HTML
    template block, matching property names to element style
    class names.

    The config parameter should be an object with the following properties:
    
    model (object) the model for the view
    template (jQuery object) reference to the HTML template for the view
    container (jQuery object) refernece to the container into which
                            the view should append the merged template    
*/
function createTemplateView(config) {
    var view = Object.create(TemplateView);

    //apply the config properites to view
    apply(config, view);

    //enable this to raise events
    view = makeEventSource(view);

    return view;
} //createTemplateView()


/*
    TemplateListView

    Simple view object that iterates the items in a ListModel
    and merges each with a TemplateView

    Used as prototype by createTemplateListView()
*/
var TemplateListView = {
    render: function() {
        var templateView = this.templateView || createTemplateView({
            template: this.template,
            container: this.container
        });

        var items = this.model.getItems();
        var idx;

        this.container.empty();

        if (items && items.length && items.length > 0) {
            for (idx = 0; idx < items.length; ++idx) {
                templateView.model = items[idx];
                templateView.render();
            }
        }

        //call the afterRender method if there is one
        //(can be used by derived objects to add things or
        //register event handlers after the render is complete)
        if (this.afterRender)
            this.afterRender();

    } //render()    
}

/*  
    createTemplateListView()

    Creates a simple template list view, which works with a ListModel
    This iterates over the items and uses a single-object template view 
    to render each model object in the array.

    The config parameter should be an object with the following properties:
    
    - model (ListModel) the model for the view
    - template (jQuery object) reference to the HTML template for the view
    - container (jQuery object) refernece to the container into which
                            the view should append the merged template

    the config may also include these optional properties:

    - templateView (object) instance of a template view to use for each object

*/
function createTemplateListView(config) {
    var view = Object.create(TemplateListView);

    //apply config properties to view
    apply(config, view);

    //enable this to raise events
    view = makeEventSource(view);

    //listen for change event on ListModel
    //and re-render
    view.model.on('change', function(){
        view.render();
    }, view);

    return view;
} //createTemplateListView()

/*
    ListModel

    Basic model representing an array of model objects. Provides
    support for getting the array of items, getting a single item
    by an 'id' property (if exists), adding new items and removing
    existing items. Triggers events at the appropriate times so that
    views that are bound to it can auto-update
*/

var ListModel = {
    getItems: function() {
        return this.items;
    },

    getItem: function(id) {
        return this.itemIndex[id];
    },

    addItem: function(item) {
        this.items.push(item);
        this.trigger('change');
    },

    removeItem: function(item) {
        var idx;
        for (idx = 0; idx < this.items.length; ++idx) {
            if (item === this.items[idx]) {
                this.items.splice(idx, 1);
                this.trigger('change');
                break;
            }
        } //for each item
    }, //removeItem()

    setItems: function(items) {
        this.items = items;
        this.buildIndex();
        this.trigger('change');
    }, //setItems()

    buildIndex: function() {    
        this.itemIndex = {};
        for (idx = 0; idx < this.items.length; ++idx) {
            item = this.items[idx];
            if (undefined != item.id)
                this.itemIndex[item.id] = item;
        }
    } //buildIndex()

} //ListModel

/*
    createListModel()

    Creates a new instance of a ListModel, applying the
    configuration properties (if any). The config parameter
    may contain the following properties:
    - items (array of objects) the model objects
*/

function createListModel(config) {
    var model = Object.create(ListModel);
    var idx;
    var item;

    apply(config, model);
    model = makeEventSource(model);

    //provide default empty items array if
    //nothing was specified in the config
    model.items = model.items || [];

    model.buildIndex();
    
    return model;
} //createListModel

/*
    createCartView()

    Creates a view for the whole shopping cart, using TemplateListView
    as the prototype. It overrides the render() function to update the
    total price, and register click event handlers for the remove item
    buttons.
*/

function createCartView(config) {
    config.cartModel = config.model;
    config.templateView = createCartItemView(config);

    var view = createTemplateListView(config);

    view.afterRender = function() {
        this.subtotalPrice.html(this.model.getSubtotalPrice());
        this.taxPrice.html(this.model.getTaxPrice());
        this.totalPrice.html(this.model.getTotalPrice());
    }; //afterRender()

    return view;
} //createCartView()

/*
    createCartItemView()

    Creates a view for a single cart item. This exists
    so that we can attach the item to the remove button
    so that when it's clicked, we know what item to remove.
*/

function createCartItemView(config) {
    var view = createTemplateView(config);

    view.afterRender = function(clonedTemplate, model) {
        clonedTemplate.find('.remove-item').click(function(){
            view.cartModel.removeItem(model);
        });
    }; //view.afterRender()

    return view;
} //createCartItemView()

/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/

function createCartModel(config) {

    var model = createListModel(config);
    
    model.getSubtotalPrice = function() {
        var idx;
        var subtotalPrice = 0;
        for (idx = 0; idx < this.items.length; ++idx) {
            subtotalPrice += this.items[idx].price;
        }
        return subtotalPrice.toFixed(2);    
    }; //getTotalPrice()

    model.getTaxPrice = function() {
        return (model.getSubtotalPrice() * 0.095).toFixed(2);
    } //getTaxPrice()

    model.getTotalPrice = function () {
        return (model.getSubtotalPrice() * 1 + model.getTaxPrice() * 1).toFixed(2);
    } //getTotalPrice

    model.toJSON = function () {
        return JSON.stringify(this.items);
    } //toJSON

    return model;
} //createCartModel()



