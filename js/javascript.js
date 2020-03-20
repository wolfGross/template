$('.mini-task').on('click', function(){
    var numberTask = $('.mini-task').length - 1;
    for(var i = 0; i <= numberTask; i++){
        $('.mini-task')[i].dataset.id = i;
    }
    var progressId = Number(this.dataset.id);
    if(this.className == 'col-3 mini-task'){
        for(var i=0; i <= numberTask; i++){
            if(i == Number(this.dataset.id)){
                this.className = 'col-12 mini-task';
                $('.task-progress')[progressId].className = 'col task-progress';
            }else{
                $('.task-progress')[i].className = 'col displayNone task-progress';
                $('.mini-task')[i].className = 'displayNone mini-task';
            }
        }
    }else{
        for(var i=0; i <= numberTask; i++){
            $('.task-progress')[i].className = 'col displayNone task-progress';
            $('.mini-task')[i].className = 'col-3 mini-task';
        }
    }
    task('.task-user', 0, progressId, 'col-12 task-user');
    task('#task', 0, progressId, 'row', false);
    task('#task', 1, progressId, 'row', false);
    task('.task-info', 1, progressId, 'col-12 task-info');
    task('.lecture', 2, progressId, 'row lecture');
    task('.new-lecture', 2, progressId, 'row new-lecture');
});

function task(classObject, numberId, taskId, nameClass, classElseId = true){
    var nameDisplayClass = nameClass + ' displayNone';
    for(var t = 0; t <= ($(classObject).length - 1); t++){
        if(taskId == numberId){
            if($(classObject)[t].className == nameClass){
                if(classElseId == true){
                    $(classObject)[t].className = nameDisplayClass;
                }else{
                    $(classObject)[0].className = nameDisplayClass;
                }
            }else{
                if(classElseId == true){
                    $(classObject)[t].className = nameClass;
                }else{
                    $(classObject)[0].className = nameClass;
                }
            }
        }
    }
}