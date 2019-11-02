class dropDownMenu() {

    constructor(containerSelector, listOfValues) {
        this._dropdownContainer = $(containerSelector);
        this._listOfValues = listOfValues;
        this._menu = null;
        this.updateDisplay();
    }

    updateDisplay() {
        this._menu.remove();
        
        var html = `<div style='background-color:#FFFFFF;
                  overflow-y: scroll;height:20vh;
                  width: containerWidthpx; border:solid 1px;
                  ><span style=''></span>`;

        for (var i = 0; i < list.length; i++) {
            element = `<span style='width:100%;'>value</span><br>`.replace("value", list[i]);
            html += element;
        }

        html += "</div>";
        this._menu = $(html);
    }

    updateValues(listOfValues) {
        this._listOfValues = listOfValues;
    }

    getValues() {
        return this._listOfValues;
    }

}



function dropDownMenu(containerSelector, list, callback) {

  var dropdownContainer = $(containerSelector);
  var html = `<div style='background-color:#FFFFFF;
              overflow-y: scroll;height:20vh;
              width: containerWidthpx; border:solid 1px;
              ><span style=''></span>`;

  html = html.replace('containerWidth', dropdownContainer.width());

  var selectedValue = dropdownContainer.innerText;
  console.log(selectedValue);
  var menu;
  for (var i = 0; i < list.length; i++) {
    element = `<span style='width:100%;'>value</span><br>`.replace("value", list[i]);
    html += element;
  }
  html += "</div>";
  menu = $(html);
  menu.appendTo(document.body);
  var off = $(containerSelector).offset();
  menu.offset({top:off.top + dropdownContainer.height(),left:off.left});
  menu.hide();
  menu.find('span').each(function() {
    $(this).click(function(){
          selectedValue = $(this)[0].innerText;
          dropdownContainer.html(selectedValue);
          menu.hide();
          callback(selectedValue);
        });
  });

  dropdownContainer.click(function() {
    menu.toggle();
  });

  $(document.body).click(function(e) {
    if (!dropdownContainer.is(e.target)
        && dropdownContainer.has(e.target).length === 0
        && !menu.is(e.target)
        && menu.has(e.target).length === 0) {
      menu.hide();
    }
  });

}
