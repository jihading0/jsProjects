let note = document.getElementById('note');
let noteAddress = document.getElementById('noteAddress');

let noteContainer = [];

function addNote() {

    let notes = {
        note: note.value,
        address: noteAddress.value
    };

    noteContainer.push(notes);

    console.log(noteContainer);

    displayNote();
}

function displayNote() {

    let disNotes = ``;

    for (let i = 0; i < noteContainer.length; i++) {
        disNotes += `

        <div class="position-relative mb-5">
        <div class="form-control mb-3 p-5" >
            <samp class="fs-5 text-uppercase" style="word-break : break-word;">
            ${noteContainer[i].address}            
            </samp>
            <pre class="" style="word-break : break-word; white-space: pre-line;">${noteContainer[i].note}</pre>
            <div class=" border-0 py-0 my-0 bg-white position-absolute start-50 translate-middle top-100">
                <button class="btn my-3 btn-outline-danger border">Delete</button>
            </div>
        </div>

        </div>

        `;
    }
    document.getElementById('output').innerHTML = disNotes;
}



