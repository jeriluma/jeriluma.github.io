/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name (string) to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        return a[propName].localeCompare(b[propName]);
    });
} //sortObjArray()


/* render()
    sortBy determins what to sort by...
*/
function render(sortBy, cartModel) {
    var idx;
    var clothingItem;
    var clonedTemplate;  

    var template = $('.template');     
    var container = $('.shop');  

    container.empty();

    //for each item the in array...
    for (idx = 0; idx < Clothes.entries.length; ++idx) {
        clothingItem = Clothes.entries[idx]; 

        clonedTemplate = template.clone();
        clonedTemplate.find('.pic').attr({
            src: clothingItem.pic, 
            alt: clothingItem.title
        }); 
        clonedTemplate.find('.title').html(clothingItem.title);
        clonedTemplate.find('.type').html(clothingItem.type);
        clonedTemplate.find('.price').html('$' + clothingItem.price);
        clonedTemplate.find('.description').html(clothingItem.description);
        clonedTemplate.find('.add-to-cart').attr({
            'data-price': clothingItem.price,
            'data-type': clothingItem.type,
            'data-name': clothingItem.title
        });

        clonedTemplate.removeClass('template');

        if(sortBy === 'all' || sortBy === clothingItem.type){
            clonedTemplate.show();
            container.append(clonedTemplate);
        }
    } //for each item in the array
    cartAdd(cartModel);
} //render()

/* document ready function */
$(function(){
    $('.template').hide();

    //sort the clothes array by title of item
    sortObjArray(Clothes.entries, 'type');

    var cartModel = createCartModel();
    var cartView = createCartView({
        model: cartModel,
        template: $('.cart-item-template'),
        container: $('.cart-item-container'),
        subtotalPrice: $('.subtotal-price'),
        taxPrice: $('.total-price-tax'),
        totalPrice: $('.total-price')
    });

    // empties the cart initially
    cartModel.setItems([]);

    // empties the cart
    $('.empty-cart-btn').click(function(){
        cartModel.setItems([]);
    });

    $('.check-out-btn').click(function(){
        createCart(cartModel);

        $('.paypal-form').submit();
    });

    //render the items
    render('all', cartModel);

    //register event handlers for sort buttons
    $('.sort-ui .btn').click(function(){
        var sortBy = this.getAttribute('data-sortby');     //sort by type

        //re-render the list
        render(sortBy, cartModel);

        //remove the 'active' class from the sort button
        //that currently has it, and add the 'active' class
        //to the button that was clicked
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    }); //sort-ui click handler

    //configure Bootstrap popovers for the sort UI buttons
    $('.sort-ui .btn').popover({
        content: function() {
            //this dynamically builds the popover content
            //based on the caption of the button that was clicked
            return 'Click to sort by ' + $(this).html();
        },
        container: 'body',      //necessary because this is a button group
        trigger: 'hover',       //triggered on hover
        placement: 'bottom'     //display popover below the button
    }); //popovers

    
}); //document ready()

function cartAdd(cartModel) {
    // adds items to the cart
    $('.add-to-cart').click(function(){
        var newCartItem = {
            type: this.getAttribute('data-type'),
            name: this.getAttribute('data-name'),
            sizeLetter: this.getAttribute('data-sizeLetter'),
            size: this.getAttribute('data-size'),
            price: parseFloat(this.getAttribute('data-price'))
        };
        cartModel.addItem(newCartItem);
    });
}

function createCart(cartModel) {
    var idx;
    var item;
    var itemTemplateClone;
    var itemTemplate = $('.paypal-item-template');
    var itemContainer = $('.paypal-item-container');

    itemContainer.empty();

    for(idx = 1; idx< cartModel.items.length + 1; ++idx){
        itemTemplateClone = itemTemplate.clone();
        item = cartModel.items[idx - 1];

        itemTemplateClone.find('#item-name').attr({
            'name': "item_name_" + idx,
            'value': item.sizeLetter + " " + item.name
        });
        
        itemTemplateClone.find('#amount').attr({
            'name': "amount_" + idx,
            'value': item.price
        });

        itemContainer.append(itemTemplateClone);
    }

}