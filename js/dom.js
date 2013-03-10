/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 3/10/13
 * Time: 6:39 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    function remove_down(e){
        var wrapper_tag = remove_tag.parentNode.parentNode

        var className = wrapper_tag.className;
        wrapper_tag.className = className + " display_none";

        setTimeout(function(){
            wrapper_tag.style.display = "none";
        } , 300)
    }

    var remove_tag;

    remove_tag = document.getElementById("remove");



    remove_tag.addEventListener("mousedown", remove_down, false);
})();