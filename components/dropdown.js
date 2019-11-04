class DropDownMenu {

    constructor(containerSelector, listOfValues) {
        this._dropdownContainer = $(containerSelector);
        this._listOfValues = listOfValues;
        this.updateDisplay();
    }

    updateDisplay() {

        if(this._menu !== undefined) {
          this._menu.remove();
        }

        var listOfValues = this._listOfValues;
        var html = `<div style='background-color:#FFFFFF;
                  overflow-y: scroll;height:20vh;
                  width: containerWidthpx; border:solid 1px;
                  ><span style=''></span>`;

        //console.log(this._dropdownContainer);
        html = html.replace("containerWidthpx", this._dropdownContainer.width()+'px');
        for (var i = 0; i < listOfValues.length; i++) {
            let element = `<span style='width:100%;'>value</span><br>`.replace("value", listOfValues[i]);
            html += element;
        }

        html += "</div>";
        this._menu = $(html);
        this._menu.click(function() {
          console.log("menu click");
        })

        $('body').append(this._menu);

        var menu = this._menu;
        this._dropdownContainer.click(function() {
          menu.toggle();
        });

        var dropDownObject = this;
        $( window ).resize(function() {
          menu.width(dropDownObject._dropdownContainer.width());
        });

        $( window ).click(function(e) {
          if (!dropDownObject._dropdownContainer.is(e.target)
              && dropDownObject._dropdownContainer.has(e.target).length === 0
              && !menu.is(e.target)
              && menu.has(e.target).length === 0) {
            menu.hide();
          }
        });

    }

    updateValues(listOfValues) {
        this._listOfValues = listOfValues;
    }

    getValues() {
        return this._listOfValues;
    }

}
