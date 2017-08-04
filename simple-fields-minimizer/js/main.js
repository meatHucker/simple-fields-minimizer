(function($){

    var connectors = '[id^=simple_fields_connector_]';
    var sections = 'li[class^="sf-cf simple-fields-metabox-field-group simple-fields-fieldgroup-"]';
    var minimizeAll = '<a class="minimize-all" href="#" title="Minimize All Items">Minimize All Items</a>';
    $(connectors).addClass('simple-fields-allow-minimize').prepend(minimizeAll);

    var minimizeSection = '<a class="minimize-section toggle-indicator" href="#" title="Minimize Section"></a>';
    $(sections).prepend(minimizeSection);

    $(document).on('click', '.minimize-section', function(e){
        e.preventDefault();
        var currentState = e.target.classList.contains('collapsed');
        var listItem = $(e.target.parentElement);
        if(currentState)
        {
            $(this).removeClass('collapsed');
            listItem.removeClass('simple_fields_minimized_item');
        }
        else
        {
            $(this).addClass('collapsed');
            listItem.addClass('simple_fields_minimized_item');
        }

    });

    $(document).on('click', '.minimize-all', function(e){
        e.preventDefault();
        var currentState = $(this).text().toLowerCase();
//        console.log(currentState);
        var listItems = $(e.target).parent('.simple-fields-allow-minimize').find(sections);

        if(currentState == 'minimize all items')
        {
            $(this).text('Maximize All Items');
            listItems.addClass('simple_fields_minimized_item');    
        }
        else
        {
            $(this).text('Minimize All Items');
            listItems.removeClass('simple_fields_minimized_item');
        }
    });


})(jQuery);