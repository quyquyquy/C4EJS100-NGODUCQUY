let dictionary = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    uiAndux : 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}

let {debug,done,defect,pm,uiAndux} = dictionary;


alert('Hi there, this is dev dictionary');
let i=prompt('Enter a keyword');
switch (i)
{
    case 'debug':
        alert(debug);
        break;
    case 'done':
        alert(done);
        break;
    case 'defect':
        alert(defect);
        break;
    case 'pm':
        alert(pm);
        break;
    case 'uiAndux':
        alert(uiAndux);
        break;
    case i:
        var n = prompt(`sorry we could not find your word ${i}, leave your explanation`);
        alert('done');
    case i:
        alert(n);
        break;       
}
