import { saveJournalEntry } from "./journalDataProvider.js"

const contentTarget = document.querySelector(".entryForm")
const eventHub = document.querySelector(".main")

const render = () => {
    contentTarget.innerHTML = `
    <form action="">
    <fieldset class="date">
        <label for="journalDate">Date of Entry</label>
       <input type="date" name="journalDate" id="journalDate">
    </fieldset>
</form>
<form action="">
    <fieldset class="concept">
        <label for="ConceptsCovered">Concepts Covered</label>
        <input type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>
</form>
<form action="">
    <fieldset class="entry">
        <label for="journalEntry">Journal Entry</label>
        <textarea name="journalEntry" id="entry" cols="30" rows="10"></textarea>
    </fieldset>
</form>
<form action="">
    <fieldset>
        <div class="mood"><label for="moodForTheDay">Mood For The Day</label><br></div>
        <select name="mood" id="moodForTheDay">
            <option value="select">How do you feel?</option>
            <option value="happy">Happy Happy Joy Joy!!!</option>
            <option value="sad">This is my worst day...</option>
            <option value="nervous">S'nervous</option>
        </select>
    </fieldset>
</form>
<form action="">
    <fieldset>
        <div class="submit"><label for="submitButton">Archive This Chapter</label><br>
        <button type="button" id="save__button">Record This Entry</button></div>
    </fieldset>
</form>
`
}

export const journalForm = () => {
    render()
}

eventHub.addEventListener("click", clickeEvent => {
    if (clickeEvent.target.id === "save__button") {
       const concept = document.querySelector("#conceptsCovered").value
       const entry = document.querySelector("#entry").value
       const mood = document.querySelector("#moodForTheDay").value
       const date = document.querySelector("#journalDate").value

       const newEntry = {
           "date": date,
           "concept": concept,
           "entry": entry,
           "mood": mood
       }
       saveJournalEntry(newEntry)
    }
})
