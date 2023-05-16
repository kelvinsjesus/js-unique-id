const historyList = document.getElementById('history-id');
const multipleIdList = document.getElementById('id-list');

function uniqueId(base) {
    if (base == undefined || isNaN(base)) {
        base = 10;
    }
    const id = Math.floor(Date.now() * Math.random()).toString(base);
    
    return id;
}

function uniqueIdList(loop) {
    if (loop == undefined || isNaN(loop)) {
        loop = 1;
    }

    const idList = [];
    for (let i = 0; i < loop; i++) {
        idList.push(uniqueId());
    }

    return idList;
}


let btnId = 1;

function updateHistory(id) {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        ${id} 
        <button class="copy" id="btn-${btnId}">
            <i class="ri-file-copy-line"></i>
        </button>
    `;
    
    historyList.append(listItem)

    btnId ++;
}

function addEventButtonCopy() {
    const buttonsCopy = document.querySelectorAll('button.copy');
    
    buttonsCopy.forEach(item => {
        item.addEventListener('click', e => {
            const content = e.target.value;

            copyToClipBoard(content)
        });
    });
}

function copyToClipBoard(text) {
    navigator.clipboard.writeText(text);
}