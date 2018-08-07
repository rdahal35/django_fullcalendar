
  $(document).ready(function() {

    $('#price_calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },

      defaultDate: new Date(),
      navLinks: true, // can click day/week names to navigate views

      dayClick: function(date, allday, ind) {
        // var today = $.fullCalendar.formatDate(new Date(),'yyyy-MM-dd');
        var id="Dtl"+date;
        console.log(id)
        $("#pricemodal_button").click();
        // var title = prompt("Provide Event Title");

        $("#submit").click(function(){
          var price= $('#price').val();
          var point= $('#point').val(); 
          if (price) {
            eventData = {
              id:id,
              title: 'Price:' + price +'$',
              start: date,
              allday: true,
              editable: false,
              overlap: false,
              color: '#ffffff',
              description: point,
              // rendering: 'background',
            };            
            $('#price_calendar').fullCalendar('renderEvent', eventData, true);
            detail = {
                id: id,
                date: date,
                price: price,
                point: point,
              };            

              $.ajax({
              url: "{% url 'save_detail' %}",

              data: {
                  'detail': JSON.stringify(detail),
              },
              dataType: 'json',
              success: function (data) {
                if (data) {
                  alert("Detail added sucess");
                }
              }

            });
          }
          

          
          $('#price_calendar').fullCalendar('unselect');

          date="";
          title = "";
          start = "";
          price="";
          point="";
          description='';
          $(document).ready(function(){

            $('#exit').click();
            $('#point').val("");
            $('#price').val("");

          });


        });
        
      },

      


      eventLimit: true, // allow "more" link when too many events
      unselectAuto: true,
      selectable: true,
      views: {
        agenda: {
          eventLimit: 1 // adjust to 6 only for agendaWeek/agendaDay
        }
      },
      events:[

         {% for detail in details %}
          {
            id: '{{ detail.id }}',
            title: '{{ detail.price }}',
            start: '{{ detail.date }}',
            color: '#ffffff',
            description: '{{ detail.points }}',
            allday: true,
            overlap: false,
          },

        {% endfor%}
        {
          title:"Monday",
          dow:[1] //monday
          //start/endtime works too
        },
      ],

      eventClick: function(event,  element) {
        $("#editprice_button  ").click();
        var price= event.title;
        var n = price.indexOf("$");
        var m = price.indexOf(":");
        $('#editprice').val(price.slice(m+1,n));
        $('#editpoint').val(event.description);
        $("#editsubmit").click(function(){
          var price= $('#editprice').val();
          var point= $('#editpoint').val();
          event.title=price;
          event.description= point;
          detail = {
                id: event.id,
                date: event.start,
                price: price,
                point: point,
              };  

          $.ajax({
              url: "{% url 'save_detail' %}",

              data: {
                  'detail': JSON.stringify(detail),
              },
              dataType: 'json',
              success: function (data) {
                if (data) {
                  alert("Detail updated sucess");
                }
              }

            });


          $('#price_calendar').fullCalendar('updateEvent', event);
          $('#event_calendar').fullCalendar('unselect');
          $('#editexit').click();
          event=""
        });
        
      },

      eventRender: function(event, element) { 
            element.find(".fc-title").remove();
            // element.find('.fc-title').append("<br/><p>Points:" + event.description +"</p>"); 
            var new_description =   
                '<b>Price:'+event.title+'<br>'+
                '<b>Points:'+event.description+'</b>'
            ;
            element.append(new_description);
        },


    });

  });