theme: true,
        themeSystem: 'jquery-ui',
        header: { // layout header
           left: 'title', 
           center: '',
           right: 'month,agendaWeek,agendaDay'
         },

        defaultDate: new Date(),
        navLinks: true, // can click day/week names to navigate views

        eventLimit: true, // allow "more" link when too many events
        unselectAuto: true,
        selectable: true,
        eventSources: [
            {
              // Every sunday as a background event
              events: function (start, end, timezone, callback) { 
                  $('#auto_fill_calendar').on('change', function(){
                      var price= $('#average_nightly_rate').val();
                      var point= $("#sunday").val();
                      if(this.checked){

                      // Get the days
                      var days = matchingDaysBetween(start, end, function (day) {
                          return day.format('dddd') === 'Sunday'; //test function
                      });

                      callback(days.map(function (day) { 
                          return {
                              start: moment(day).startOf('day'),
                              end: moment(day).endOf('day'),
                              title: price,
                              color: '#ffffff',
                              description: point,
                              backgroundColor: '#88aa11',
                          };
                      }));
                    }

                    });

                      
                  }
              },

              {
              // Every sunday as a background event
              events: function (start, end, timezone, callback) { 

                  $('#auto_fill_calendar').on('change', function(){
                      var price= $('#average_nightly_rate').val();
                      var point= $("#monday").val()
                      if(this.checked){

                        // Get the days
                      var days = matchingDaysBetween(start, end, function (day) {
                          return day.format('dddd') === 'Monday'; //test function
                      });

                      // Map days to events
                      callback(days.map(function (day) { 
                          return {
                              start: moment(day).startOf('day'),
                              end: moment(day).endOf('day'),
                              title: price,
                              color: '#ffffff',
                              description: point,
                              backgroundColor: '#88aa11',
                          };
                      }));
                    }
                    });

                      
                  }
              },

              {
              // Every sunday as a background event
              events: function (start, end, timezone, callback) { 

                  $('#auto_fill_calendar').on('change', function(){
                      var point= $("#tuesday").val()
                      var price= $('#average_nightly_rate').val();

                      if(this.checked){

                        // Get the days
                      var days = matchingDaysBetween(start, end, function (day) {
                          return day.format('dddd') === 'Tuesday'; //test function
                      });

                      // Map days to events
                      callback(days.map(function (day) { 
                          return {
                              start: moment(day).startOf('day'),
                              end: moment(day).endOf('day'),
                              title: price,
                              color: '#ffffff',
                              description: point,
                              backgroundColor: '#88aa11',
                          };
                      }));
                    }
                    });

                      
                  }
              },

              {
              // Every sunday as a background event
              events: function (start, end, timezone, callback) { 

                  $('#auto_fill_calendar').on('change', function(){
                      var point= $("#wednesday").val()
                      var price= $('#average_nightly_rate').val();
                      if(this.checked){

                        // Get the days
                      var days = matchingDaysBetween(start, end, function (day) {
                          return day.format('dddd') === 'Wednesday'; //test function
                      });

                      // Map days to events
                      callback(days.map(function (day) { 
                          return {
                              start: moment(day).startOf('day'),
                              end: moment(day).endOf('day'),
                              title: price,
                              color: '#ffffff',
                              description: point,
                              backgroundColor: '#88aa11',
                          };
                      }));
                    }
                    });

                      
                  }
              },

              {
              // Every sunday as a background event
              events: function (start, end, timezone, callback) { 

                  $('#auto_fill_calendar').on('change', function(){
                      var point= $("#thursday").val()
                      var price= $('#average_nightly_rate').val();
                      if(this.checked){

                        // Get the days
                      var days = matchingDaysBetween(start, end, function (day) {
                          return day.format('dddd') === 'Thursday'; //test function
                      });

                      // Map days to events
                      callback(days.map(function (day) { 
                          return {
                              start: moment(day).startOf('day'),
                              end: moment(day).endOf('day'),
                              title: price,
                              color: '#ffffff',
                              description: point,
                              backgroundColor: '#88aa11',
                          };
                      }));
                    }
                    });

                      
                  }
              },

              {
              // Every sunday as a background event
              events: function (start, end, timezone, callback) { 

                  $('#auto_fill_calendar').on('change', function(){
                      var point= $("#friday").val()
                      var price= $('#average_nightly_rate').val();
                      if(this.checked){

                        // Get the days
                      var days = matchingDaysBetween(start, end, function (day) {
                          return day.format('dddd') === 'Friday'; //test function
                      });

                      // Map days to events
                      callback(days.map(function (day) { 
                          return {
                              start: moment(day).startOf('day'),
                              end: moment(day).endOf('day'),
                              title: price,
                              color: '#ffffff',
                              description: point,
                              backgroundColor: '#88aa11',
                          };
                      }));
                    }
                    });

                      
                  }
              },

              {
              // Every sunday as a background event
              events: function (start, end, timezone, callback) { 

                  $('#auto_fill_calendar').on('change', function(){
                      var point= $("#saturday").val()
                      var price= $('#average_nightly_rate').val();
                      if(this.checked){

                        // Get the days
                      var days = matchingDaysBetween(start, end, function (day) {
                          return day.format('dddd') === 'Saturday'; //test function
                      });

                      // Map days to events
                      callback(days.map(function (day) { 
                          return {
                              start: moment(day).startOf('day'),
                              end: moment(day).endOf('day'),
                              title: price,
                              color: '#ffffff',
                              description: point,
                              backgroundColor: '#88aa11',                          };
                      }));
                    }
                    });

                      
                  }
              },
            ],


        eventClick: function(event,  element) {
          // alert(event._id)
          $("#editprice_button").click();
          var price= event.title;
          // var n = price.indexOf("$");
          // var m = price.indexOf(":");
          $('#editprice').val(price);
          $('#editpoint').val(event.description);
          $("#editsubmit").click(function(){
            var price= $('#editprice').val();
            var point= $('#editpoint').val();
            event.title=  price;
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
          });
          
        },

       $("#form_submit").click(function(){
                // alert(event.start);
                
                detail = {
                  id: event._id,
                  date: event.start,
                  price: event.title,
                  point: event.description,
                }; 

                document.getElementById("hostForm").submit();

              });   