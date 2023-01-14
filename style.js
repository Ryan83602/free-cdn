
class Action{
    constructor(parameter) {
        this._action = false;
        this._burger = $('.burger');
        this._menu = $('.menu');
        this._add_event();
    }
    _sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time*1000));
    }
    // (async function() {
    //     await sleep(1);
    // })();
   

    _add_event(){
        let that = this;
        this._burger.click(function(){
            if(!that._action){
                that._action = true;
                that._menu.addClass('menu-action');
                that._burger.addClass('burger-close');
            }else{
                that._action = false;
                that._menu.removeClass('menu-action');
                that._burger.removeClass('burger-close');
            }
            
        });
    }
    
}
