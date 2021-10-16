function getInputValue()
{
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    var inputVal = document.getElementById('Mname').value;

    canvas.width = 1024;
    canvas.height = 1024;

    const frame = document.getElementById('frame');
    ctx.drawImage(frame,0,0);
    ctx.textAlign = 'center';
    ctx.font = 'bold 93px Night Display';
    ctx.fillStyle = "#FFD300";
    ctx.fillText(`${inputVal}`,frame.width/2,450);
   

    if(window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(canvas.msToBlob(),`DW_${inputVal}.png`);
    } else {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = `big-project.png`;
        a.click();
        document.body.removeChild(a);
    }
}



